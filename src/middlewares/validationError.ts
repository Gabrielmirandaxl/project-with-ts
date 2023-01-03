import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

const validationError = (req: Request, res: Response , next: NextFunction) =>{
  const error = validationResult(req);

  if(error.isEmpty()){
   return next();
  }

   const errorArray: object[] = [];

  error.array().map((err) => errorArray.push({[err.param]: err.msg}))

  return res.status(400).json({
    error: errorArray
  })

}

export default validationError