import { Request, Response } from "express";

abstract class Controller {
  static handler(req: Request, res: Response): void {}
}

export default Controller;
