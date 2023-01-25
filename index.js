import express from "express";
// Enviroment variables
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// Ruter
import router from "./routes/index.router.js";
// Middlewares
import {boomErrorHandler, errorHandler, logErrors} from './middlewares/error.handler.js'

const app = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
})

app.use('/pokedex', router)
app.use(logErrors)
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello world')
})