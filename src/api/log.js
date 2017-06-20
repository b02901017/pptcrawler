import { Router } from 'express';
import { Log }  from '../models/';


const logRouter = new Router();

logRouter.get('/', (req, res) => {
	// return res.end(JSON.stringify(data));

	let title = req.query.title;
	let start = parseInt(req.query.start);
	if (!start)
		start = 0; 
	let end = parseInt(req.query.end);
	if(title.length != 0){
		Log.find({"Movietitle":title}).lean().skip(start).limit(end-start).sort({'Date' : -1}).exec(function (err, logs) {
			if (err) return handleError(err);
			return res.json(logs);
		});	
	}
	else 
		return res.send('error');


});

export default logRouter;