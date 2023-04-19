import express from "express";
const router = express.Router();

import {createBeneficiary, getBeneficiary, getBeneficiaries, deleteBeneficiary, getBeneficiariesBySearch, updateBeneficiary} from "../controllers/beneficiary.js";

router.get("/:id",getBeneficiary);
router.post("/", createBeneficiary);
router.delete("/:id", deleteBeneficiary);
router.patch("/:id", updateBeneficiary);
router.get("/", getBeneficiaries);
router.get("/search", getBeneficiariesBySearch);


export default router;