import { Interest } from "../interest/Interest";
import { JsonValue } from "type-fest";

export type User = {
  age: number | null;
  agePreference: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interest?: Interest | null;
  lastName: string | null;
  location: string | null;
  radiusPreference: number | null;
  roles: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  username: string;
};
