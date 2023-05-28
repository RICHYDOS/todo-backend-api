import express from "express";
import tryCatch from "../middleware/tryCatch";
import {getAll, getOne, create, update, status, destroy} from "../controllers/todos";

const router = express.Router();

router.get("/", tryCatch(getAll));
router.get("/:id", tryCatch(getOne));
router.post("/", tryCatch(create));
router.patch("/:id", tryCatch(update));
router.put("/:id/status", tryCatch(status));
router.delete("/:id", tryCatch(destroy));