import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from './Route/userRoute'
import {mongoconnecton} from './db';
mongoconnecton();
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.use("/user",users)

export default app;
