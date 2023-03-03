//Import tools
import { body } from "express-validator";
import { errorAuthValidation } from "./errorAuthValidation";

//Validate Auth Data
export const dataAuthValidation = [
  body('email', 'formato email incorrecto')
    .trim()
    .isEmail()
    .normalizeEmail()
  ,
  body('password', 'Mínimo 6 caracteres')
    .trim()
    .isLength({ min: 6 })
  ,
  errorAuthValidation
]