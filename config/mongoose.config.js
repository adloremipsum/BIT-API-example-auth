// Modularización de la conexión

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/prueba-auth"); // connection string

export default mongoose;
