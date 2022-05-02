import ApiError from "../lib/ApiError";
import httpStatus from "http-status";

export default function isAuthenticated(req, res, next) {
  if (req.jwt) {
    req.user = req.jwt.user;

    next();
  } else throw new ApiError(httpStatus["401_MESSAGE"], httpStatus.UNAUTHORIZED);
}
