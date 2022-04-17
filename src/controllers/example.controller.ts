import Controller from "../lib/Controller";
import ApiError from "../lib/ApiError";
import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import httpStatus from "http-status";


declare type Response<T = {}> = {
  status: number;
  data: T;
}

type ResponseData = {
  message: string;
}

export default class ExampleController extends Controller {

  static index(req: ExpressRequest, res: ExpressResponse<ResponseData>): Promise<Response<ResponseData>> | Response<ResponseData> {
    if (req.query.hasOwnProperty("error")) {
      console.log("throwing  api error");
      throw new ApiError("throw error", httpStatus.BAD_REQUEST);
    }

    return {
      status: 200,
      data: {
        message: "Hello World"
      }
    };
  }
};
