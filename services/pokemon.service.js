import sequelize from "../libs/sequelize.js";

class PokemonService {
  constructor() {}
  async createPokemon(pokemon) {
    return { message: "Create pokemon" };
  }
  async findAll() {
    const pokemons = await sequelize.models.pokemon.findAll();
    return pokemons;
  }
  async findById(id) {
    return { message: `Get pokemon by ID - ${id}` };
  }

  async findByName(name) {
    return { message: `Get pokemon by name - ${name}` };
  }

  async findByAbility(ability) {
    return { message: `Get pokemon by ability - ${ability}` };
  }

  async findByWeight(weight) {
    return { message: `Get pokemon by weight - ${weight}` };
  }

  async findBySpeed(speed) {
    return { message: `Get pokemon by speed - ${speed}` };
  }

  async findByAttack(attack) {
    return { message: `Get pokemon by attack - ${attack}` };
  }

  async findByDefense(defense) {
    return { message: `Get pokemon by defense - ${defense}` };
  }

  async findByCategory(category) {
    return { message: `Get pokemon by category - ${category}` };
  }
}

export default PokemonService;
