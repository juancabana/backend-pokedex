import expres from "express";
import pokemonRouter from "./pokemon.router.js";

const router = expres.Router();

router.use("/pokemon", pokemonRouter);

export default router
