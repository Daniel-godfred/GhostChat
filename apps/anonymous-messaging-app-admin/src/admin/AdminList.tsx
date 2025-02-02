import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdminList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Admins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="activeUsers" source="activeUsers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="loginStatistics" source="loginStatistics" />
        <TextField label="totalUsers" source="totalUsers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userReports" source="userReports" />
      </Datagrid>
    </List>
  );
};
