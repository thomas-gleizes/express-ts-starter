import httpStatus from "http-status";

import type { AuthRequest, Request, Response } from "app/server";
import type { User } from "app/models";
import ApiError from "lib/ApiError";
import { createJwt } from "utils/security";

export default class AuthController {
  static register(
    req: Request<{ email: string; name: string; password: string }>,
    res: Response<{ success: true; jwt: string; user: User }>
  ) {
    if (req.body.password === "john.doe@email.com")
      throw new ApiError("email already exist", httpStatus.BAD_REQUEST);

    const user: User = {
      id: 0,
      email: req.body.email,
      name: req.body.name,
    };

    const jwt = createJwt({ user });

    return res.send({ success: true, jwt, user });
  }

  static login(
    req: Request<{ email: string; password: string }>,
    res: Response<{ user: User; jwt: string; success: true }>
  ) {
    if (req.body.password === "crash")
      throw new ApiError("email/password", httpStatus.UNAUTHORIZED);

    const user: User = {
      id: 0,
      email: req.body.email,
      name: "john doe",
    };

    const jwt = createJwt({ user });

    return res.send({ success: true, jwt, user });
  }

  static showMe(req: AuthRequest, res: Response<{ success: true; user: User }>) {
    const user = req.user;

    return res.send({ success: true, user });
  }
}
