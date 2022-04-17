import Controller from "../lib/Controller";
import ApiError from "../lib/ApiError";
import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import httpStatus from "http-status";


declare type Response<T = {}> = {
  status: number;
  data: T;
}

type Example = {
  id: number;
  title: string;
  content: string;
}


export default class ExampleController extends Controller {

  static index(req: ExpressRequest, res: ExpressResponse<{ examples: Example[] }>) {
    if (req.query.hasOwnProperty("error")) {
      console.log("throwing  api error");
      throw new ApiError("throw error", httpStatus.BAD_REQUEST);
    }

    res.json({
      examples: [
        {
          id: 1,
          title: "example 1",
          content: "example content 1"
        },
        {
          id: 2,
          title: "example 2",
          content: "example content 2"
        }
      ]
    });
  }

  static show(req: ExpressRequest, res: ExpressResponse<{ example: Example }>) {
    const id = req.params.id;

    if (+id <= 0) {
      throw new ApiError("example not found", httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.ACCEPTED).json({
      example: {
        id: +id,
        title: `title ${id}`,
        content: `content ${id}`
      }
    });
  }

};
