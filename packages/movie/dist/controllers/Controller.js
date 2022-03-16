"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("../prismaClient"));
class Controller {
    constructor({ entity, validationSchema, prismaOptions }) {
        this.entity = entity;
        this.validationSchema = validationSchema;
        this.prismaOptions = prismaOptions;
        this.prismaClient = prismaClient_1.default;
        this.prismaEntity = prismaClient_1.default[entity];
    }
    store(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = request;
            if (this.validationSchema) {
                const validation = this.validationSchema.validate(body, { abortEarly: false });
                if (validation.error) {
                    return response.status(400).json(validation.error.details);
                }
            }
            try {
                const registry = yield this.prismaEntity.create({
                    include: (_a = this.prismaOptions) === null || _a === void 0 ? void 0 : _a.include,
                    data: body
                });
                response.json(registry);
            }
            catch (error) {
                console.error(error);
                response.status(400).send({ message: `Failed insert: ${this.entity}` });
            }
        });
    }
    index(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const registries = yield this.prismaEntity.findMany({ include: (_a = this.prismaOptions) === null || _a === void 0 ? void 0 : _a.include });
            response.json(registries);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { body } = request;
            const registry = yield this.prismaEntity.update({
                where: { id },
                data: body
            });
            response.json(registry);
        });
    }
    remove(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            yield this.prismaEntity.delete({ where: { id } });
            response.json({ message: `${this.entity.toUpperCase()} Removed` });
        });
    }
    getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const registry = yield this.prismaEntity.findUnique({ where: { id } });
            response.json(registry);
        });
    }
}
exports.default = Controller;
