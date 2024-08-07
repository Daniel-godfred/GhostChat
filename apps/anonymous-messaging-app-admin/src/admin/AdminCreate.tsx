import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="activeUsers" source="activeUsers" />
        <div />
        <NumberInput step={1} label="totalUsers" source="totalUsers" />
        <div />
      </SimpleForm>
    </Create>
  );
};
