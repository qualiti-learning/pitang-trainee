import ShortnerModel from "../model/ShortnerModel.js";

class ShortnerController {
  async index(request, response) {
    const shortners = await ShortnerModel.find().lean();

    response.json({ shortners });
  }

  async store(request, response) {
    const body = request.body;

    const shortner = await ShortnerModel.create(body);

    response.json({ shortner });
  }
  update(request, response) {}
  remove(request, response) {}
  getOne(request, response) {}
}

export default ShortnerController;
