declare type ResponseError<Data = {}> = {
  message: string
  data?: Data
}

declare module "app/types" {
  import { Request as ExpressRequest, Response as ExpressResponse } from "express";

  declare type Request = ExpressRequest;
  declare type Response<Data = {}> = ExpressResponse<Data>;
}