import { Router } from 'express';
import { Movie }  from '../models/';

const movieRouter = new Router();

movieRouter.get('/', (req, res) => {
	let start = parseInt(req.query.start);
	let end = parseInt(req.query.end);
	Movie.find({}).lean().skip(start).limit(end-start).exec(function (err, movies) {
		if (err) return handleError(err);
    	return res.json(movies);
	});	
});

export default movieRouter;