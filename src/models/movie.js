import mongoose from 'mongoose';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const movieSchema = mongoose.Schema({
  	_id: Object,
    Push: String,
    Author: String,
    Title:String,
    Date:String,
    Link:String,
    Catagory:String,
    Content:Number

}, options);

export const Movie = mongoose.model('Movie', movieSchema);