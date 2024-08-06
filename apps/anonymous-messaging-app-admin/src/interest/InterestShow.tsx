import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INTEREST_TITLE_FIELD } from "./InterestTitle";

export const InterestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="interestId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <TextField label="agePreference" source="agePreference" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Interest"
              source="interest.id"
              reference="Interest"
            >
              <TextField source={INTEREST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Last Name" source="lastName" />
            <TextField label="location" source="location" />
            <TextField label="radiusPreference" source="radiusPreference" />
            <TextField label="Roles" source="roles" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
