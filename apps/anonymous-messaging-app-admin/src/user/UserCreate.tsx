import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { InterestTitle } from "../interest/InterestTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <NumberInput step={1} label="agePreference" source="agePreference" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="interest.id"
          reference="Interest"
          label="Interest"
        >
          <SelectInput optionText={InterestTitle} />
        </ReferenceInput>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="location" source="location" />
        <PasswordInput label="Password" source="password" />
        <NumberInput
          step={1}
          label="radiusPreference"
          source="radiusPreference"
        />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
