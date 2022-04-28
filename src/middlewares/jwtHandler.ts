import httpStatus from "http-status";

import ApiError from "lib/ApiError";
import { verifyJwt } from "utils/security";

export default function jwtHandler(req, res, next) {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    try {
      const token = bearerToken.split(" ")[1];
      req.jwt = verifyJwt(token);
    } catch (err) {
      throw new ApiError("Invalid Token", httpStatus.UNAUTHORIZED);
    }
  }

  next();
}
