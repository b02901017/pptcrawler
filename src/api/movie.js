import { Router } from 'express';
import { Article }  from '../models/';
import data from "../../data/data.json"
let ObjectID = require('mongodb').ObjectID;

const movieRouter = new Router();

movieRouter.get('/', (req, res) => {
	Article.find({}).lean().exec(function (err, movies) {
		if (err) return handleError(err);
    	return res.end(JSON.stringify(movies));
	});	
});

export default movieRouter;