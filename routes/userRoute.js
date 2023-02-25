import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(userController.createUser);

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getAUser);
  router
  .route("/login")
  .post(userController.loginUser);

export default router;
