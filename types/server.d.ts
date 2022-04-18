declare module "app/server" {
  import { Request as ExpressRequest, Response as ExpressResponse } from "express";

  declare type Request = ExpressRequest;
  declare type Response<Data = {}> = ExpressResponse<Data>;
}
