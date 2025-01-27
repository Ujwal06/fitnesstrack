import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
            message: "Invalid email format"
        }
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
    },
},
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);