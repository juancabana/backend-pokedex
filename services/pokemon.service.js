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
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { id: id },
    });
    return pokemon;
  }

  async findByName(name) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { name: name },
    });

    return pokemon;
  }

  async findByAbility(ability) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { ability: ability },
    });
    return pokemon;
  }

  async findByWeight(weight) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { weight: weight },
    });
    return pokemon;
  }

  async findBySpeed(speed) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { speed: speed },
    });
    return pokemon;
  }

  async findByAttack(attack) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { attack: attack },
    });
    return pokemon;
  }

  async findByDefense(defense) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { defense: defense },
    });
    return pokemon;
  }

  async findByCategory(category) {
    const pokemon = await sequelize.models.pokemon.findOne({
      where: { category: category },
    });
    return pokemon;
  }
}

export default PokemonService;
