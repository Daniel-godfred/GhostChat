import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INTEREST_TITLE_FIELD } from "../interest/InterestTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
