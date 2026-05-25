import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes";

const router = Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  return res.json({
    message: "Asset ROI API running"
  });
});

export default router;
