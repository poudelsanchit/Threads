import mongoose from "mongoose";
const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    profilePic: {
        type: String,
        default: "https://i.pinimg.com/originals/1e/d3/d3/1ed3d3ede778506de6edade417cce3e0.jpg",
    },
    followers: {
        type: [String],
        default: [],
    },
    following: {
        type: [String],
        default: [],
    },
    bio: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
})
const User = mongoose.model('User', userScheme);

export default User;