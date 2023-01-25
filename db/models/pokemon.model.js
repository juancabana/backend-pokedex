import { Model, DataTypes } from "sequelize";

const POKEMON_TABLE = "pokemon";

export const PokemonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ability: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  weight: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  speed: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  attack: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  defense: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

export class Pokemon extends Model {
  // Is not associations
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: POKEMON_TABLE,
      modelName: "pokemon",
      timestamps: false,
    };
  }
}
