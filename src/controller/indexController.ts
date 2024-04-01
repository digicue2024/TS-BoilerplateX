import { Request, Response } from "express";

const indexController = (_req: Request, res: Response) => {
  res.send("Hello Worldsjdsjd!");

  console.log("Hello World!");
};

export default { indexController };
