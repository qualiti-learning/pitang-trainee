import express from "express";
import UserController from "../controller/UserController.js";

const router = express.Router();

router.get("/api/user", UserController.index);
router.get("/api/user/:id", UserController.getOne);
router.post("/api/user", UserController.store);
router.put("/api/user/:id", UserController.update);
router.delete("/api/user/:id", UserController.remove);

export default router;
