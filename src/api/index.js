import { Router } from 'express';
import movieRouter from './movie';

const router = new Router();



router.use('/movie', movieRouter);


export default router;

