import express from "express";
import dotenv from "dotenv";
import {Items} from "./models/items";
import todos from "./routes/todos";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

Items.sequelize?.sync({}).then(() => {
    console.log("Connected to the Database");
});

app.use(express.json());
app.use("/api", );

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});