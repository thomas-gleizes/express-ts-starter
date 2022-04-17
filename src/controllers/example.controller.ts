import httpStatus from "http-status";

import { Request, Response } from "app/types";
import Controller from "../lib/Controller";
import ApiError from "../lib/ApiError";


type Example = {
  id: number;
  title: string;
  content: string;
}


export default class ExampleController extends Controller {

  static index(req: Request, res: Response<{ examples: Example[] }>) {
    if (req.query.hasOwnProperty("error")) {
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

  static show(req: Request, res: Response<{ example: Example }>) {
    const id = +req.params.id;

    if (+id <= 0) {
      throw new ApiError("example not found", httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.ACCEPTED).json({
      example: {
        id: id,
        title: `title ${id}`,
        content: `content ${id}`
      }
    });
  }

};
