import { Module } from "@nestjs/common";
import { UserActionModuleBase } from "./base/userAction.module.base";
import { UserActionService } from "./userAction.service";
import { UserActionController } from "./userAction.controller";
import { UserActionResolver } from "./userAction.resolver";

@Module({
  imports: [UserActionModuleBase],
  controllers: [UserActionController],
  providers: [UserActionService, UserActionResolver],
  exports: [UserActionService],
})
export class UserActionModule {}
