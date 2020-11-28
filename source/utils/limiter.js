import reteLimit from "express-rate-limit";
export const limiter = (numRequest, resetIn) => () =>
  reteLimit({
    windowMs: resetIn,
    max: numRequest,
    headers: false,
  });
