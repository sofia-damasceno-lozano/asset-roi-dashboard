import { Request, Response } from "express";

export async function register(
  req: Request,
  res: Response
) {

  return res.json({
    message: "User registered"
  });

}

export async function login(
  req: Request,
  res: Response
) {

  return res.json({
    message: "User logged in"
  });

}
