import createHash from "create-hash";
import jwt from "jsonwebtoken";

export function sha256(stringToHash: string): string {
  const hash = createHash("sha512");

  hash.update(process.env.SECRET_SEED + stringToHash);
  const hashedString: string = hash.digest().toString("hex");
  hash.end();

  return hashedString;
}

export function compareHash(str: string, encrypted: string): boolean {
  return sha256(str) === encrypted;
}

export function createJwt(payload: any): string {
  return jwt.sign({ user: payload }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
}

export function verifyJwt(token: string): any {
  return jwt.verify(token, process.env.SECRET_TOKEN);
}
