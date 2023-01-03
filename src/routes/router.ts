import {Router} from "express";
import ControllerMovie from "../controllers/Movie"; //controller movie
import validationError from "../middlewares/validationError"; //middleware for validation errors

//middlewares
import validation from "../middlewares/validationMovie"

const router = Router();

router.post("/movie", validation.createValidation(), validationError, ControllerMovie.createMovie); //register
router.get("/movie/:idMovie", ControllerMovie.getMovie) // get one movie
router.get("/movies", ControllerMovie.moviesAll) //get all movies
router.delete("/movie/:idMovie", ControllerMovie.deleteMovie) //delete one movie
router.put("/movie/:idMovie", validation.createValidation() ,ControllerMovie.updateMovie ) //update onde movie

export default router;