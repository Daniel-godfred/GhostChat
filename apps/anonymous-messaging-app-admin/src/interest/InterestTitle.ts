import { Interest as TInterest } from "../api/interest/Interest";

export const INTEREST_TITLE_FIELD = "id";

export const InterestTitle = (record: TInterest): string => {
  return record.id?.toString() || String(record.id);
};
