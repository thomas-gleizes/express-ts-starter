import httpStatus from "http-status";
import ApiError from "lib/ApiError";
import trace from "utils/trace";

export default function errorHandler(err, req, res, next): void {
  console.log("Error handler : ", err);

  if (err instanceof ApiError) {
    trace(`Api Error (${err.status}): ${err.message}`);

    return res
      .status(err.status)
      .json({ message: err.message || httpStatus[`${err.status}_MESSAGE`], data: err.data });
  }

  trace(`Internal Error : ${err.stack}`);

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: httpStatus["500_MESSAGE"] });
}
