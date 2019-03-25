import { generateInsertSql } from "../utils/helpers";
import { getHashedPasswordAndSalt } from "./authetication";
import { getPool } from "./db";


interface UserFields {
  login_name: string;
  login_pwd: string;

}
export const signup = async (fields: Partial<UserFields>): Promise<Object> => {
  const {
    hashedPassword,
    salt: salt
  } = await getHashedPasswordAndSalt({ password: fields.login_pwd as string });
  Object.assign(fields, {
    login_pwd: hashedPassword,
    password_salt: salt
  });
  const userInsertString = generateInsertSql("users", fields);
  const pool = await getPool();
  const result = await pool.query(userInsertString);
  console.log("sign up successfully")
  return result
};


