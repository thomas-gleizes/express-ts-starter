declare module "app/server" {
  import { Request as ExpressRequest, Response as ExpressResponse } from "express";

  declare type DefaultDate = { success: boolean };
  declare type Request<B = any, D = any> = ExpressRequest<unknown, unknown, B, D>;
  declare type Response<Data extends DefaultDate> = ExpressResponse<Data>;
}
