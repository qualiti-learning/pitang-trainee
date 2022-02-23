import mongoose from 'mongoose';

const ShortnerSchema = new mongoose.Schema({
    link: { type: String, required: true },
    hash: { type: String, required: true, unique: true },
    hits: { type: Number, default: 0 },
    metadata: [
        mongoose.SchemaTypes.Mixed
    ],
    ownerId: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' }
}, {
    timestamps: true
});

const ShortnerModel = mongoose.model("shortner", ShortnerSchema);

export default ShortnerModel;