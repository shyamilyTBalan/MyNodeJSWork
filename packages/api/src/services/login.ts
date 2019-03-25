import { getHashedPasswordAndSalt } from "../services/authetication";
import { createHash, createJwt } from "../utils/crypto";
import { getUserByUsername, getUserIdByUsername } from "./user";

export const login = async (fields: { login_name: string, login_pwd: string }) => {
  const { login_name: username, login_pwd: enteredPassword } = fields
  const user = await getUserByUsername(username)
  const [{ password_salt: salt, login_pwd: retreivedPassword }] = user
  const hashedPasswordAndSalt = await getHashedPasswordAndSalt({
    password: enteredPassword,
    salt: salt
  });
  const { hashedPassword } = hashedPasswordAndSalt;
  const isPasswordMatching = hashedPassword === retreivedPassword
  if (isPasswordMatching) {
    const user_Id = await getUserIdByUsername(username)
    const token = createJwt({ user_id: user_Id })
    const tokenHash = createHash(token);
    return tokenHash;
  }
  else {
    throw Error;
  }

};




