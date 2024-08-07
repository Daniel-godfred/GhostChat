import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("AppStatisticsOutputDtoObject")
class AppStatisticsOutputDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    totalUsers!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    activeUsers!: number;

    @Field(() => GraphQLJSON)
    loginStatistics!: InputJsonValue;

    @Field(() => GraphQLJSON)
    userReports!: InputJsonValue;
}

export { AppStatisticsOutputDto as AppStatisticsOutputDto };