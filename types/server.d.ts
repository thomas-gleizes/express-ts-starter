declare module "app/server" {
  import { Request as ExpressRequest, Response as ExpressResponse } from "express";
  import { User } from "app/models";

  declare type JWT = { iat: string; exp: string; user: User };

  declare type DefaultDate = { success: boolean };
  declare type Request<B = any, D = any> = ExpressRequest<unknown, unknown, B, D> & { jwt?: JWT };
  declare type Response<Data extends DefaultDate> = ExpressResponse<Data>;

  declare type AuthRequest<B = any, D = any> = Request<B, D> & { user: User };
}
