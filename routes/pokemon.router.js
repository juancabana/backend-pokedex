import express from "express";
import PokemonService from "../services/pokemon.service.js";

const service = new PokemonService();
const router = express.Router();

// Create pokemon
router.post("/", async (req, res) => {
  try {
    const { data } = req.params;
    const newPokemon = await service.createPokemon(data);
    res.json(newPokemon);
  } catch (error) {
    next(error);
  }
});

// Get all pokemons
router.get("/", async (req, res) => {
  try {
    const pokemons = await service.findAll();
    res.json(pokemons);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by ID
router.get("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await service.findById(id);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by name
router.get("/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await service.findByName(name);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by ability
router.get("/ability/:ability", async (req, res) => {
  try {
    const { ability } = req.params;
    const pokemon = await service.findByAbility(ability);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by weight
router.get("/weight/:weight", async (req, res) => {
  try {
    const { weight } = req.params;
    const pokemon = await service.findByWeight(weight);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by speed
router.get("/speed/:speed", async (req, res) => {
  try {
    const { speed } = req.params;
    const pokemon = await service.findBySpeed(speed);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by attack
router.get("/attack/:attack", async (req, res) => {
  try {
    const { attack } = req.params;
    const pokemon = await service.findByAttack(attack);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by defense
router.get("/defense/:defense", async (req, res) => {
  try {
    const { defense } = req.params;
    const pokemon = await service.findByDefense(defense);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});
// Get pokemon by category
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const pokemon = await service.findByCategory(category);
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
});

export default router;
