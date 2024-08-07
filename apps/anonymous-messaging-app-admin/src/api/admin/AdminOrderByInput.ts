import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  activeUsers?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loginStatistics?: SortOrder;
  totalUsers?: SortOrder;
  updatedAt?: SortOrder;
  userReports?: SortOrder;
};
