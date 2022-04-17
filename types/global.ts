declare module "app/types" {
  import { Request as ExpressRequest, Response as ExpressResponse } from "express";

  type Request = ExpressRequest;
  type Response<Data = {}> = ExpressResponse<Data>;
}