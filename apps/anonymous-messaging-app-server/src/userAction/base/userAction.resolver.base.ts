/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserAction } from "./UserAction";
import { UserActionCountArgs } from "./UserActionCountArgs";
import { UserActionFindManyArgs } from "./UserActionFindManyArgs";
import { UserActionFindUniqueArgs } from "./UserActionFindUniqueArgs";
import { CreateUserActionArgs } from "./CreateUserActionArgs";
import { UpdateUserActionArgs } from "./UpdateUserActionArgs";
import { DeleteUserActionArgs } from "./DeleteUserActionArgs";
import { User } from "../../user/base/User";
import { UserActionInputDto } from "../UserActionInputDto";
import { UserActionService } from "../userAction.service";
@graphql.Resolver(() => UserAction)
export class UserActionResolverBase {
  constructor(protected readonly service: UserActionService) {}

  async _userActionsMeta(
    @graphql.Args() args: UserActionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserAction])
  async userActions(
    @graphql.Args() args: UserActionFindManyArgs
  ): Promise<UserAction[]> {
    return this.service.userActions(args);
  }

  @graphql.Query(() => UserAction, { nullable: true })
  async userAction(
    @graphql.Args() args: UserActionFindUniqueArgs
  ): Promise<UserAction | null> {
    const result = await this.service.userAction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserAction)
  async createUserAction(
    @graphql.Args() args: CreateUserActionArgs
  ): Promise<UserAction> {
    return await this.service.createUserAction({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserAction)
  async updateUserAction(
    @graphql.Args() args: UpdateUserActionArgs
  ): Promise<UserAction | null> {
    try {
      return await this.service.updateUserAction({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserAction)
  async deleteUserAction(
    @graphql.Args() args: DeleteUserActionArgs
  ): Promise<UserAction | null> {
    try {
      return await this.service.deleteUserAction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: UserAction): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserActionInputDto)
  async BlockUser(
    @graphql.Args()
    args: UserActionInputDto
  ): Promise<UserActionInputDto> {
    return this.service.BlockUser(args);
  }

  @graphql.Mutation(() => UserActionInputDto)
  async IgnoreUser(
    @graphql.Args()
    args: UserActionInputDto
  ): Promise<UserActionInputDto> {
    return this.service.IgnoreUser(args);
  }

  @graphql.Mutation(() => UserActionInputDto)
  async ReportUser(
    @graphql.Args()
    args: UserActionInputDto
  ): Promise<UserActionInputDto> {
    return this.service.ReportUser(args);
  }
}
