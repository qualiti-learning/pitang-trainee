import { Request, Response } from "express";
import Controller from "../src/controllers/Controller";

describe('Controller', () => {
    it('Testing my Index', async () => {
        const request = {} as Request

        const response = {
            json: jest.fn()
        } as any

        const controller = new Controller({entity: "user"});

        expect(await controller.index(request, response)).toBe(undefined)
        expect(response.json).toHaveBeenCalled()
    });
})