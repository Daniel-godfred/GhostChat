import { JsonValue } from "type-fest";

export type Admin = {
  activeUsers: number | null;
  createdAt: Date;
  id: string;
  loginStatistics: JsonValue;
  totalUsers: number | null;
  updatedAt: Date;
  userReports: JsonValue;
};
