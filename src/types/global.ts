import { Router } from "express";

export interface Controller {
  route: string;
  router: Router;
}
