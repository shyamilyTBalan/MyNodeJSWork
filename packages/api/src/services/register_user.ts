import { generateInsertSql } from "../utils/helpers";
import { getHashedPasswordAndSalt } from "./authetication";
import { getPool } from "./db";


interface userFields {
  login_name: string;
  login_pwd: string;

}
export const signup = async (fields: Partial<userFields>): Promise<Object> => {
  const {
    hashedPassword,
    salt: password_salt
  } = await getHashedPasswordAndSalt({ password: fields.login_pwd || '' });
  Object.assign(fields, {
    login_pwd: hashedPassword,
    password_salt: password_salt
  });
  const userInsertString = generateInsertSql("users", fields);
  const pool = await getPool();
  const result = await pool.query(userInsertString);
  console.log("sign up successfully")
  return result
    ;
};


