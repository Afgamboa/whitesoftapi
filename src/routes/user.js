import express from "express";
import { newUser } from "../api/users.js";

const router = express.Router();

router.post("/new", newUser);

export default router;
