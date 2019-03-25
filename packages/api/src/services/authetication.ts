
import { randomBytes, pbkdf2 } from "crypto";

export const getHashedPasswordAndSalt = ({
  password,
  salt
}: {
  password: string;
  salt?: string;
}): Promise<{ hashedPassword: string; salt: string }> =>
  new Promise((resolve, reject) => {
    salt = salt || randomBytes(16).toString("hex");
    pbkdf2(password, salt, 10000, 512, "sha512", (error, hashedPasword) => {
      if (error) {
        return reject(error);
      }
      resolve({ hashedPassword: hashedPasword.toString("hex"), salt: salt as string })
    });
  });



