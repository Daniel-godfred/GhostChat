import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  activeUsers?: number | null;
  loginStatistics?: InputJsonValue;
  totalUsers?: number | null;
  userReports?: InputJsonValue;
};
