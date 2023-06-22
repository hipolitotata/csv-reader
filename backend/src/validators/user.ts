import Joi from "joi";

const User = Joi.object().keys({
  name: Joi.string().required().max(50).uppercase(),
  city: Joi.string().required().max(50).uppercase(),
  country: Joi.string().required().max(100).uppercase(),
  favorite_sport: Joi.string().required().max(100).uppercase(),
});

export const UsersSchema = Joi.array().items(User);

