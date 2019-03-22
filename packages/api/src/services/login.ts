import { getHashedPasswordAndSalt } from "../services/authetication";
import { createHash, createJwt } from "../utils/crypto";
import { getUserByUsername } from "./getAllUser";
import { resolve } from "url";

export const login = async (req, res, pool) => {
    const login_name = req.body.login_name;
    const login_password = req.body.login_pwd;

          const user = await getUserByUsername(login_name)
          const [{password_salt,login_pwd}]=user;
                    const hashedPasswordandsalt = await getHashedPasswordAndSalt({
                        password: login_password,
                        salt: password_salt
                    });
                    const {hashedPassword} = hashedPasswordandsalt;
                    const isPasswordMatching = hashedPassword === login_pwd;
                    if (isPasswordMatching) {
                        const token = createJwt({ user_id: req.body.user_id });
                        const tokenHash = createHash(token);
                       return tokenHash;
                    }
                    else
                      return "password not matching"
                      
};


