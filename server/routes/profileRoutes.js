import express from "express";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/:username", getProfile);

export default router;