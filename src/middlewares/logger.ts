export default function logger(req, res, next) {
  console.log(`Received: ${req.method} ${req.path}`);
  next();
}
