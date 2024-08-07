import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("UserReportOutputDtoObject")
class UserReportOutputDto {
    @Field(() => GraphQLJSON)
    userReports!: InputJsonValue;
}

export { UserReportOutputDto as UserReportOutputDto };