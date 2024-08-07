import { UserActionWhereInput } from "./UserActionWhereInput";
import { UserActionOrderByInput } from "./UserActionOrderByInput";

export type UserActionFindManyArgs = {
  where?: UserActionWhereInput;
  orderBy?: Array<UserActionOrderByInput>;
  skip?: number;
  take?: number;
};
