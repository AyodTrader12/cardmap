import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";
export const createAccount = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(salt, password);

    const user = await userModel.create({
      name,
      email,
      password: hash,
    });
    return res.status(201).json({
      message: "account created succesfully",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error createing account",
      status: 404,
    });
  }
};

export const loginAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        return res.status(201).json({
          meaage: "login successfull",
          data: user,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "password error",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        message: "email error",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "error logging in account",
      status: 404,
    });
  }
};

export const readOneser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);

    return res.status(201).json({
      message: "reading user account",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error reading user account",
    });
  }
};

export const readAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await userModel.find();
    return res.status(201).json({
      message: "readingall users account",
      data: allUser,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "errror reading all users account",
      status: 404,
    });
  }
};
