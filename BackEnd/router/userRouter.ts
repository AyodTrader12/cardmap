import { Router } from "express";
import {
  createAccount,
  loginAccount,
  readAllUser,
  readOneser,
} from "../controller/userController";
const router: any = Router();

router.route("/create-account").post(createAccount);
router.route("/login").post(loginAccount);
router.route("read-one-user/:uderID").get(readOneser);
router.route("/users").get(readAllUser);
