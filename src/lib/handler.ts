import { Request, Response } from "express";
import ApiError from "./ApiError";
import httpStatus from "http-status";

const handler = (controller: (req: Request, res: Response) => any | Promise<any>) => {
  return async (req: Request, res: Response) => {
    try {
      const response = await controller(req, res);

      return res.status(response.status).json(response.data);
    } catch (err) {
      if (err instanceof ApiError)
        return res.status(err.status).json({ message: err.message });

      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: httpStatus["500_MESSAGE"] });
    }
  };
};

export default handler;