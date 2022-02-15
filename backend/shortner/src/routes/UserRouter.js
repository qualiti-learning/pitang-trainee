import { Router } from "express";

import UserController from "../controller/UserController.js";

const userController = new UserController();

const router = Router();

router.get("/users", userController.index);
router.get("/users/:id", userController.getOne);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.remove);

export default router;
