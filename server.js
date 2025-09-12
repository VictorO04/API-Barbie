import express from "express";
import dotenv from "dotenv";
import barbiesRouter from "./src/routes/barbiesRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("😉 Servidor Funcionando");
});

app.use("/barbies", barbiesRouter);

app.listen(serverPort, () => {
    console.log(`Servidor online em: http://localhost:${serverPort}`);
});