"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const prisma = __importStar(require("@prisma/client"));
const joi_1 = __importDefault(require("joi"));
const Controller_1 = __importDefault(require("./Controller"));
const { TicketType } = prisma;
const schema = joi_1.default.object({
    price: joi_1.default.number().required().precision(2),
    type: joi_1.default.string().required().valid(...Object.values(TicketType)),
    session: joi_1.default.object({
        connect: joi_1.default.object({
            id: joi_1.default.string().required()
        })
    }),
    user: joi_1.default.object({
        connect: joi_1.default.object({
            id: joi_1.default.number().required()
        })
    })
});
class TicketController extends Controller_1.default {
    constructor() {
        super({
            entity: 'ticket',
            validationSchema: schema,
            prismaOptions: {
                include: {
                    session: {
                        include: {
                            movie: true
                        }
                    },
                    user: true
                }
            }
        });
    }
    store(request, response) {
        const _super = Object.create(null, {
            store: { get: () => super.store }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const { sessionId, userId } = request.body;
            delete request.body.sessionId;
            delete request.body.userId;
            request.body = Object.assign(Object.assign({}, request.body), { session: {
                    connect: {
                        id: sessionId
                    }
                }, user: {
                    connect: {
                        id: userId
                    }
                } });
            _super.store.call(this, request, response);
        });
    }
}
exports.default = TicketController;
