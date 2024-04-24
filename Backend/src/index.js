import app from './app.js'
import { PORT } from "./config.js";

// Empieza a escuchar
app.listen(PORT);
console.log(`Server corriendo el backend  http://localhost:${PORT}/`)