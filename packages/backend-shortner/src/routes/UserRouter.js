import { Router } from "express";

import UserController from "../controller/UserController.js";

const userController = new UserController();

const router = Router();

router.post("/login", userController.login.bind(userController));
router.get("/users", userController.index.bind(userController));
router.get("/users/:id", userController.getOne.bind(userController));
router.post("/users", userController.store.bind(userController));
router.put("/users/:id", userController.update.bind(userController));
router.delete("/users/:id", userController.remove.bind(userController));

export default router;
