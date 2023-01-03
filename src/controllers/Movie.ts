import ModelMovies from "../models/Movie"; //modelMovies
import {Request, Response} from "express";
import logger from "../../log";
import { Model } from "mongoose";

//create movie
async function createMovie(req: Request, res: Response){
 try {
  
  const data = req.body;

  const movie = await ModelMovies.create(data);

  res.status(200).json(movie);
 } catch (error) {
  logger.error(`erro: ${error}`);
 }
}

//get one movie
async function getMovie(req: Request<{idMovie: string;}>, res: Response){
  try {

   const movie = await ModelMovies.findById(req.params.idMovie)

   if(!movie){
    return res.status(404).json("not found movie")
   }

   return res.status(200).json(movie)
    
  } catch (error) {
    logger.error(`erro: ${error}`)
  }
}

//get all movies
async function moviesAll(req: Request, res: Response){
 try {

  const movies = await ModelMovies.find().sort({rating: 1})

  return res.status(200).json(movies)
  
 } catch (error) {
  logger.error(`erro: ${error}`)
 }
}

//delete one movie
async function deleteMovie(req: Request<{idMovie: string;}>, res: Response){
  try {

    const movie = await ModelMovies.findById(req.params.idMovie)

    if(!movie){
      return res.status(404).json("not found movie")
    }
      
      await ModelMovies.deleteOne({_id: req.params.idMovie})

    return res.status(200).json({
      message: "movie deleted",
      deleteMovie: movie
    })
  } catch (error) {
    
  }
}

//update onde movie
async function updateMovie(req: Request<{idMovie: string;}>, res: Response){
  try {

    const data = req.body
   
    const movie = await ModelMovies.findById(req.params.idMovie)

    if(!movie){
      return res.status(404).json("not found movie")
    }

    await ModelMovies.updateOne({_id: req.params.idMovie}, data)
  
    return res.status(200).json({
      message: "update sucess",
      movieUpdate: movie
    })

  } catch (error) {
    logger.error(`error: ${error}`)
  }
}

export default {
  createMovie,
  getMovie,
  moviesAll,
  deleteMovie,
  updateMovie,

}