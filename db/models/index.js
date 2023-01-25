import { Pokemon, PokemonSchema } from "./pokemon.model.js";

export const setupModels = (sequelize) => {
  Pokemon.init(PokemonSchema, Pokemon.config(sequelize));
};
