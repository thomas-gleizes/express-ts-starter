import httpStatus from "http-status";

import type { Request, Response } from "app/server";
import type { Example } from "app/models";
import Controller from "../lib/Controller";
import ApiError from "../lib/ApiError";

export default class ExampleController extends Controller {
  static index(req: Request, res: Response<{ examples: Example[] }>) {
    if (req.query.hasOwnProperty("error"))
      throw new ApiError("throw error", httpStatus.BAD_REQUEST);

    res.json({
      examples: [
        {
          id: 1,
          title: "example 1",
          description: "description 1",
        },
        {
          id: 2,
          title: "example 2",
          description: "description 2",
        },
      ],
    });
  }

  static create(req: Request, res: Response<{ example: Example }>) {
    const { body } = req;

    res.status(201).json({
      example: {
        id: 3,
        title: body.title,
        description: body.description,
      },
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
        description: `description ${id}`,
      },
    });
  }
}
