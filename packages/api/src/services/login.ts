import { getHashedPasswordAndSalt } from "../services/authetication";
import { createHash, createJwt } from "../utils/crypto";
import { getUserByUsername } from "./user";

export const login = async (fields: { login_name: string, login_pwd: string, user_id: string }) => {
  const { login_name } = fields;
  const user = await getUserByUsername(login_name)
  const [{ password_salt, login_pwd }] = user;
  const hashedPasswordandsalt = await getHashedPasswordAndSalt({
    password: fields.login_pwd,
    salt: password_salt
  });
  const { hashedPassword } = hashedPasswordandsalt;
  const isPasswordMatching = hashedPassword === login_pwd;
  if (isPasswordMatching) {
    const token = createJwt({ user_id: fields.user_id });
    const tokenHash = createHash(token);
    return tokenHash;
  }
  else {
    return "password not matching"
  }

};




