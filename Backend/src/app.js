import express  from "express";
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express();

//middlewares por defecto
app.use(cors({origin: 'http://localhost:5173',credentials: true}));
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(cookieParser());

//Rutas
app.use('/api',authRoutes);
app.use('/api',clientsRoutes);


app.get('/',(req,res)=>{
    res.send('Activo');
}); 


export default app;