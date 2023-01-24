import express from "express";

const router = express.Router();

// Create pokemon
router.post("/", (req, res) => {
  try {
    res.json({ message: "Create pokemon" });
  } catch (error) {
    next(error);
  }
});

// Get all pokemons
router.get("/", (req, res) => {
  try {
    res.json({ message: "Get all pokemons" });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by ID
router.get("/id/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({ message: `Get pokemon by ID - ${id}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by name
router.get("/name/:name", (req, res) => {
  try {
    const { name } = req.params;
    res.json({ message: `Get pokemon by name - ${name}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by ability
router.get("/ability/:ability", (req, res) => {
  try {
    const { ability } = req.params;
    res.json({ message: `Get pokemon by ability - ${ability}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by weight
router.get("/weight/:weight", (req, res) => {
  try {
    const { weight } = req.params;
    res.json({ message: `Get pokemon by weight - ${weight}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by speed
router.get("/speed/:speed", (req, res) => {
  try {
    const { speed } = req.params;
    res.json({ message: `Get pokemon by speed - ${speed}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by attack
router.get("/attack/:attack", (req, res) => {
  try {
    const { attack } = req.params;
    res.json({ message: `Get pokemon by attack - ${attack}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by defense
router.get("/defense/:defense", (req, res) => {
  try {
    const { defense } = req.params;
    res.json({ message: `Get pokemon by defense - ${defense}` });
  } catch (error) {
    next(error);
  }
});
// Get pokemon by category
router.get("/category/:category", (req, res) => {
  try {
    const { category } = req.params;
    res.json({ message: `Get pokemon by category - ${category}` });
  } catch (error) {
    next(error);
  }
});

export default router;
