import express  from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import directionRoutes from './routes/direction.routes.js';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { URL_FRONT } from "./config.js";

const app = express();

//middlewares por defecto
app.use(cors({origin: URL_FRONT,credentials: true}));
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(cookieParser());

//Rutas
app.use('/api',authRoutes);
app.use('/api',clientsRoutes);
app.use('/api',directionRoutes);


app.get('/',(req,res)=>{
    res.send('Activo');
}); 


export default app;