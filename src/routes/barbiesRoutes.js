import express from "express";
import {getAllBarbies, getByIdBarbies, createBarbie, deleteBarbie} from "../controllers/barbiesController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getByIdBarbies);
router.post("/", createBarbie);
router.delete("/:id", deleteBarbie)

export default router;