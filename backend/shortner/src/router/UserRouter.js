import express from "express";
import UserController from "../controller/UserController.js";

const userController = new UserController();

const router = express.Router();

router.post("/api/login", userController.login);
router.get("/api/users", userController.index);
router.get("/api/users/:id", userController.getOne);
router.post("/api/users", userController.store);
router.put("/api/users/:id", userController.update);
router.delete("/api/users/:id", userController.remove);

export default router;
