"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieController_1 = __importDefault(require("../controllers/MovieController"));
const router = (0, express_1.Router)();
const controller = new MovieController_1.default();
router.get('/movie', controller.index.bind(controller));
router.post('/movie', controller.store.bind(controller));
router.get('/movie/:id', controller.getOne.bind(controller));
router.delete('/movie/:id', controller.remove.bind(controller));
router.put('/movie/:id', controller.update.bind(controller));
exports.default = router;
