import express from "express";
import { limiter } from "../../utils/limiter";

import { get, post } from "./handlers";
import { getByHash, putByHash, deleteByHash } from "./hash";

export const router = express.Router();

router.get("/", limiter(2, 1000 * 30), get);
router.post("/", post);

router.get("/:userHash", getByHash);
router.put("/:userHash", putByHash);
router.delete("/:userHash", deleteByHash);
// router.put('/:userHash', updateByHash);

export { router as users };
