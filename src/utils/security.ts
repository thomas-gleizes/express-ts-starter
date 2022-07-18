import crypto from "node:crypto";
import jwt from "jsonwebtoken";

export function sha512(stringToHash: string): string {
  const hash = crypto.createHash("sha512");

  hash.update(process.env.SECRET_SEED + stringToHash);
  const hashedString: string = hash.digest().toString("hex");
  hash.end();

  return hashedString;
}

export function createJwt(payload: any): string {
  return jwt.sign({ user: payload }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
}

export function verifyJwt(token: string): any {
  return jwt.verify(token, process.env.SECRET_TOKEN);
}
