import express from "express";
import PokemonService from "../services/pokemon.service.js";
import validatorHandler from "./../middlewares/validator.handler.js";
import {
  idPokemonSchema,
  createPokemonSchema,
  abilityPokemonSchema,
  attackPokemonSchema,
  categoryPokemonSchema,
  defensePokemonSchema,
  namePokemonSchema,
  speedPokemonSchema,
  weightPokemonSchema,
  heightPokemonSchema,
} from "./../schemas/pokemon.schema.js";

const service = new PokemonService();
const router = express.Router();

// Create pokemon
router.post(
  "/",
  validatorHandler(createPokemonSchema, "body"),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newPokemon = await service.createPokemon(body);
      res.json({
        success: true,
        newPokemon,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Get all pokemons
router.get("/", async (req, res, next) => {
  try {
    const pokemons = await service.findAll();

    res.json({ success: true, pokemons });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by ID
router.get(
  "/id/:id",
  validatorHandler(idPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pokemons = await service.findById(id);
      res.json({ success: true, pokemons });
    } catch (error) {
      // throw new Error(error)
      next(error);
    }
  }
);
// Get pokemon by name
router.get(
  "/name/:name",
  validatorHandler(namePokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const pokemons = await service.findByName(name);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by ability
router.get(
  "/ability/:ability",
  validatorHandler(abilityPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { ability } = req.params;
      const pokemons = await service.findByAbility(ability);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by weight
router.get(
  "/weight/:weight",
  validatorHandler(weightPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { weight } = req.params;
      const pokemons = await service.findByWeight(weight);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by height
router.get(
  "/height/:height",
  validatorHandler(heightPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { height } = req.params;
      const pokemons = await service.findByHeight(height);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by speed
router.get(
  "/speed/:speed",
  validatorHandler(speedPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { speed } = req.params;
      const pokemons = await service.findBySpeed(speed);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by attack
router.get(
  "/attack/:attack",
  validatorHandler(attackPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { attack } = req.params;
      const pokemons = await service.findByAttack(attack);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by defense
router.get(
  "/defense/:defense",
  validatorHandler(defensePokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { defense } = req.params;
      const pokemons = await service.findByDefense(defense);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);
// Get pokemon by category
router.get(
  "/category/:category",
  validatorHandler(categoryPokemonSchema, "params"),
  async (req, res, next) => {
    try {
      const { category } = req.params;
      const pokemons = await service.findByCategory(category);
      res.json({ success: true, pokemons });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
