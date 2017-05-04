import { Router } from 'express';
import { Movie }  from '../models/';
import data from "../../data/data.json"

const movieRouter = new Router();

movieRouter.get('/', (req, res) => {
	Movie.find({}).lean().exec(function (err, movies) {
		if (err) return handleError(err);
    	return res.end(JSON.stringify(movies));
	});	
});

export default movieRouter;