import httpStatus from "http-status";
import ApiError from "lib/ApiError";

export default function errorHandler(err, req, res, next): void {
  console.log("handler error", err);

  if (err instanceof ApiError)
    return res
      .status(err.status)
      .json({ message: err.message || httpStatus[`${err.status}_MESSAGE`], data: err.data });

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: httpStatus["500_MESSAGE"] });
}
