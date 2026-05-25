import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Asset ROI API running"
  });
});

export default router;
