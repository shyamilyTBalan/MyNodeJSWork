import { createHmac, Hmac, BinaryLike } from "crypto";
import jwt from "jsonwebtoken";

export const createHash = (payload: string): string =>
  createHmac("sha256", process.env.NS_HMAC_SECRET as string)
    .update(payload)
    .digest("hex");

export const createJwt = (payload: string | object): string =>
  jwt.sign(payload, process.env.NS_JWT_SECRET as string , {
    expiresIn: "24h"
  });

export const verifyJwt = (token: string) =>
  jwt.verify(token, process.env.NS_JWT_SECRET as string);
