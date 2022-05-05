import httpStatus from "http-status";

import ApiError from "lib/ApiError";

export default function isAuthenticated(req, res, next) {
  if (req.jwt) {
    req.user = req.jwt.user;

    next();
  } else throw new ApiError("Access denied", httpStatus.UNAUTHORIZED);
}
