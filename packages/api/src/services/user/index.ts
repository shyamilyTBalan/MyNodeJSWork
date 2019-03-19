import * as development from "./user";
import * as testing from "./user.mock";

export const userService: { [key: string]: any } = {
  development,
  testing
};
