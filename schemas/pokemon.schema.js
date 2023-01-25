import Joi from "joi";

const id = Joi.number().integer().id();
const name = Joi.string().alphanum().min(3).max(50);
const description = Joi.string();
const ability = Joi.string().alphanum().min(3).max(30);
const weight = Joi.number().integer().positive();
const speed = Joi.number().integer().positive();
const attack = Joi.number().integer().positive();
const defense = Joi.number().integer().positive();
const category = Joi.string().alphanum().min(3).max(30);
const image = Joi.string();

export const createPokemonSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  description: description.required(),
  ability: ability.required(),
  weight: weight.required(),
  speed: speed.required(),
  attack: attack.required(),
  defense: defense.required(),
  category: category.required(),
  image: image.required(),
});

export const idPokemonSchema = Joi.object({
  id: id.required(),
});
export const namePokemonSchema = Joi.object({
  name: name.required(),
});
export const descriptionPokemonSchema = Joi.object({
  description: description.required(),
});
export const abilityPokemonSchema = Joi.object({
  ability: ability.required(),
});
export const weightPokemonSchema = Joi.object({
  weight: weight.required(),
});
export const speedPokemonSchema = Joi.object({
  speed: speed.required(),
});
export const attackPokemonSchema = Joi.object({
  attack: attack.required(),
});
export const defensePokemonSchema = Joi.object({
  defense: defense.required(),
});
export const categoryPokemonSchema = Joi.object({
  category: category.required(),
});
export const imagePokemonSchema = Joi.object({
  image: image.required(),
});
