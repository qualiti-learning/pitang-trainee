"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = (0, express_1.Router)();
const controller = new UserController_1.default();
router.get('/user', controller.index.bind(controller));
router.post('/user', controller.store.bind(controller));
router.get('/user/:id', controller.getOne.bind(controller));
router.delete('/user/:id', controller.remove.bind(controller));
router.put('/user/:id', controller.update.bind(controller));
exports.default = router;
