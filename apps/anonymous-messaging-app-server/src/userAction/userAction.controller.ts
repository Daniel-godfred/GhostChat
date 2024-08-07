import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserActionService } from "./userAction.service";
import { UserActionControllerBase } from "./base/userAction.controller.base";

@swagger.ApiTags("userActions")
@common.Controller("userActions")
export class UserActionController extends UserActionControllerBase {
  constructor(protected readonly service: UserActionService) {
    super(service);
  }
}
