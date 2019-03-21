import { generateInsertSql } from "../utils/helpers";
import { getHashedPasswordAndSalt } from "./authetication";
import { getPool } from "../services/db";

export const signup = async (fields: object): Promise<Object> => {
  const {
    hashedPassword,
    salt: password_salt
  } = await getHashedPasswordAndSalt({ password: fields["login_pwd"] });

  Object.assign(fields, {
    login_pwd: hashedPassword,
    password_salt: password_salt
  });
  const userInsertString = await generateInsertSql("[users]", fields);
  const pool = await getPool();
  const { recordset: [user] } = await pool.query(userInsertString);
  return user;
};

