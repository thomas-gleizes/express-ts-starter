import trace from "utils/trace";

export default function logger(req, res, next) {
  trace(req.method + " : " + req.path);

  next();
}
