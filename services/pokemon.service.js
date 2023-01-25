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
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { id: id },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByName(name) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { name: name },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByAbility(ability) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { ability: ability },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByWeight(weight) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { weight: weight },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findBySpeed(speed) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { speed: speed },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByAttack(attack) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { attack: attack },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByDefense(defense) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { defense: defense },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }

  async findByCategory(category) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { category: category },
    });
    if (!pokemon) {
      throw boom.notFound('Pokemon not found');
    }
    return pokemon;
  }
}

export default PokemonService;
