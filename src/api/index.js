import { Router } from 'express';
import movieRouter from './movie';
import logRouter from './log';
const router = new Router();



router.use('/movie', movieRouter);
router.use('/log', logRouter);
export default router;

