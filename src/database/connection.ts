import mongoose from "mongoose";

import logger from "../../log";

async function connect(){
 
    mongoose.set('strictQuery', true)
  
    try {
      await mongoose.connect(`${process.env.DB_URL}`)
      logger.info("Database connected")
    } catch (error) {
      logger.error("Failed connection database")
      console.error(`Error: ${error}`)
    }
}

export default{
  connect,
}