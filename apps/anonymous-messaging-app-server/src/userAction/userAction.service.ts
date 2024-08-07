import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserActionServiceBase } from "./base/userAction.service.base";

@Injectable()
export class UserActionService extends UserActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
