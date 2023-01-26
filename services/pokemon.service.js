import sequelize from "../libs/sequelize.js";
import boom from '@hapi/boom'

class PokemonService {
  constructor() {}
  async createPokemon(data) {
    const newPokemon = await sequelize.models.pokemon.create(data)
    return newPokemon;
  }
  async findAll() {
    const pokemons = await sequelize.models.pokemon.findAll();
    return pokemons;
  }
  async findById(id) {
    const pokemons = await sequelize.models.pokemon.findOne({
      where: { id: id },
    });
    if (!pokemons) {
      throw boom.notFound('Pokemon not found');
    }
    return [pokemons];
  }

  async findByName(name) {
    const pokemons = await sequelize.models.pokemon.findOne({
      where: { name: name },
    });
    if (!pokemons) {
      throw boom.notFound('Pokemon not found');
    }
    return [pokemons];
  }

  async findByAbility(ability) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { ability: ability },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }

  async findByWeight(weight) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { weight: weight },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }
  async findByHeight(height) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { height: height },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }

  async findBySpeed(speed) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { speed: speed },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }

  async findByAttack(attack) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { attack: attack },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }

  async findByDefense(defense) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { defense: defense },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }

  async findByCategory(category) {
    const pokemons = await sequelize.models.pokemon.findAll({
      where: { category: category },
    });
    if (pokemons.length === 0) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemons;
  }
}

export default PokemonService;
