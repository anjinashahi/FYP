import express from "express";

import bloodTestController from "../controllers/bloodController.js";

const bloodRouter = express.Router();

bloodRouter.post("/analyze", bloodTestController);  // no change needed unless adding more routes

export default bloodRouter;
