import * as graphql from "@nestjs/graphql";
import { UserActionResolverBase } from "./base/userAction.resolver.base";
import { UserAction } from "./base/UserAction";
import { UserActionService } from "./userAction.service";

@graphql.Resolver(() => UserAction)
export class UserActionResolver extends UserActionResolverBase {
  constructor(protected readonly service: UserActionService) {
    super(service);
  }
}
