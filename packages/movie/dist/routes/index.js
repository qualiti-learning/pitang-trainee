"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieRouter_1 = __importDefault(require("./MovieRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const TickerRouter_1 = __importDefault(require("./TickerRouter"));
const SessionRouter_1 = __importDefault(require("./SessionRouter"));
const router = (0, express_1.Router)();
router.use(MovieRouter_1.default);
router.use(UserRouter_1.default);
router.use(TickerRouter_1.default);
router.use(SessionRouter_1.default);
exports.default = router;
