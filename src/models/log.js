import mongoose from 'mongoose';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const logSchema = mongoose.Schema({
  	_id: Object,
    Push: String,
    Title:String,
    Date:String,
    Link:String,
    Catagory:String,
    Movietitle:String

}, options);

export const Log = mongoose.model('Log', logSchema, 'pptlog');