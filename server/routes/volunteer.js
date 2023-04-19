import express from "express";
const router = express.Router();

import {createVol, getVol, getVols, deleteVol, getVolsBySearch, updateVol} from "../controllers/volunteer.js";

router.get("/:id",getVol);
router.post("/", createVol);
router.delete("/:id", deleteVol);
router.patch("/:id", updateVol);
router.get("/", getVols);
router.get("/search", getVolsBySearch);


export default router;