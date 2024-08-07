import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="activeUsers" source="activeUsers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="loginStatistics" source="loginStatistics" />
        <TextField label="totalUsers" source="totalUsers" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userReports" source="userReports" />
      </SimpleShowLayout>
    </Show>
  );
};
