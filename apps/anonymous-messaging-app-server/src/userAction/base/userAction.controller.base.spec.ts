import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserActionController } from "../userAction.controller";
import { UserActionService } from "../userAction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionTimestamp: new Date(),
  actor: "exampleActor",
  createdAt: new Date(),
  id: "exampleId",
  target: "exampleTarget",
  targetUser: "exampleTargetUser",
  targetUserId: "exampleTargetUserId",
  timestamp: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actionTimestamp: new Date(),
  actor: "exampleActor",
  createdAt: new Date(),
  id: "exampleId",
  target: "exampleTarget",
  targetUser: "exampleTargetUser",
  targetUserId: "exampleTargetUserId",
  timestamp: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actionTimestamp: new Date(),
    actor: "exampleActor",
    createdAt: new Date(),
    id: "exampleId",
    target: "exampleTarget",
    targetUser: "exampleTargetUser",
    targetUserId: "exampleTargetUserId",
    timestamp: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actionTimestamp: new Date(),
  actor: "exampleActor",
  createdAt: new Date(),
  id: "exampleId",
  target: "exampleTarget",
  targetUser: "exampleTargetUser",
  targetUserId: "exampleTargetUserId",
  timestamp: new Date(),
  updatedAt: new Date(),
};

const service = {
  createUserAction() {
    return CREATE_RESULT;
  },
  userActions: () => FIND_MANY_RESULT,
  userAction: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserAction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserActionService,
          useValue: service,
        },
      ],
      controllers: [UserActionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userActions", async () => {
    await request(app.getHttpServer())
      .post("/userActions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actionTimestamp: CREATE_RESULT.actionTimestamp.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userActions", async () => {
    await request(app.getHttpServer())
      .get("/userActions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actionTimestamp: FIND_MANY_RESULT[0].actionTimestamp.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userActions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userActions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userActions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userActions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actionTimestamp: FIND_ONE_RESULT.actionTimestamp.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userActions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userActions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actionTimestamp: CREATE_RESULT.actionTimestamp.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userActions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
