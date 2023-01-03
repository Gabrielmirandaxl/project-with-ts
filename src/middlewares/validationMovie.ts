import { body } from "express-validator";

const createValidation = () =>{
  return[
    body("title")
    .isString()
    .withMessage("É obrigatório colocar o titulo")
    .isLength({max:20})
    .withMessage("Só é possivel 20 caracteres nesse campo")
    .escape(),

    body("rating")
    .isNumeric()
    .withMessage("A nota é obrigatória")
    .custom((value: number) =>{
      if(value < 0 || value > 10){
        throw new Error("A nota precisa ser entre 0 e 10")
      }
      return true
    }),

    body("description")
    .isString()
    .withMessage("É obrigatório ter uma descrição")
    .isLength({max: 30})
    .escape()
    .withMessage("caracteres errado"),

    body("director")
    .isString()
    .withMessage("Digite o nome do diretor do filme")
    .isLength({max: 20})
    .escape(),

    body("poster")
    .isURL()
    .withMessage("A imagem precisa ser uma url")

  ]
}

export default  {
  createValidation
} 