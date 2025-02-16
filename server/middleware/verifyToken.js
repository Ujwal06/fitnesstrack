import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            return next(createError(401, "Invalid authorization!"));
        }

        const token = req.headers.authorization.split(" ")[1];

        if(!token) return next(createError(401, "Invalid authorization!"));

        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded;
        return next();
    } catch (err) {
        next(err);
    }
};