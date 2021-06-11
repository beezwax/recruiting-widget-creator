import express from 'express';
import router from './router.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(router);

export default app;
