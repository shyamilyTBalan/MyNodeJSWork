import { getHashedPasswordAndSalt } from "../services/authetication";
import { createHash, createJwt } from "../utils/crypto";

export const login = async (req, res, pool) => {
    const login_name = req.body.login_name;
    const login_pwd = req.body.login_pwd;
    const password_salt = req.body.salt;
    return new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM users WHERE login_name = '" + login_name + "'", async function (error, results, fields) {
            if (error)
                reject(error);
            else {
                if (results.rowCount > 0) {
                    const hashedPassword = getHashedPasswordAndSalt({
                        password: req.body.password,
                        salt: password_salt
                    });
                    const isPasswordMatching = hashedPassword === login_pwd;
                    if (isPasswordMatching) {
                        const token = createJwt({ user_id: req.body.user_id });
                        const tokenHash = createHash(token);
                        resolve(res
                            .status(200)
                            .cookie("access-token-hmac", tokenHash, {
                                secure: process.env.NODE_ENV === "production",
                                signed: true,
                                httpOnly: true
                            })
                            .json({ message: "authenticated", token })
                        )
                    }
                    else
                        resolve("password is not matching....try again")
                }
                else
                    resolve("user not found with given  username..try again")
            }
        })
    })
};


