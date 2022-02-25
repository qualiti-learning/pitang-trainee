import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    state: {
      type: String,
      enum: ['PE', 'AL', 'PA', 'Other'],
    },
    password: String,
    birthDate: Date,
    phones: [String],
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
