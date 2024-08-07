import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  activeUsers?: number | null;
  loginStatistics?: InputJsonValue;
  totalUsers?: number | null;
  userReports?: InputJsonValue;
};
