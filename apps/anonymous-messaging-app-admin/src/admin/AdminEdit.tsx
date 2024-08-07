import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="activeUsers" source="activeUsers" />
        <div />
        <NumberInput step={1} label="totalUsers" source="totalUsers" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
