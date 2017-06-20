import mongoose from 'mongoose';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const movieSchema = mongoose.Schema({   
  _id : Object, 
  Date :String, 
  Grade : String, 
  ImgURL : String, 
  Movietitle : String, 
  Rate : String,
  Score : Number, 
  Time : String 


}, options);

export const Movie = mongoose.model('Movie', movieSchema, 'movieindex');