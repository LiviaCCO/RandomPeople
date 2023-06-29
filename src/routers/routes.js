import { Router } from "express";
import { getPerson } from "../controllers/people.js";

const router = Router()
router.get("/person", getPerson)

export default router