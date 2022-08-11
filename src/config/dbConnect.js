import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Usuario2:123@cluster0.s6a51.mongodb.net/Alura")

let db = mongoose.connection;

export default db;