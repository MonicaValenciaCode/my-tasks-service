import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
  res.status(200).json("testing get for the tasks route");
};
