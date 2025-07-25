const Joi = require("joi");

// import { LANG_ENUM, FINISH_ENUM, RARITY_ENUM, COLOR_ENUM } from "../utils/cardAttributes";
// import layoutCardFaceMapping from "../utils/cardLayoutsMapping";
// const CARD_LAYOUTS = Object.keys(layoutCardFaceMapping);

// const baseCardFields = {
//   scryfall_id: Joi.string().min(1),
//   scryfall_uri: Joi.string().min(1).uri(),
//   set_code: Joi.string().min(1),
//   set_name: Joi.string().min(1),
//   collector_number: Joi.string().min(1),
//   name: Joi.string().min(1),
//   lang: Joi.string().valid(...LANG_ENUM),

//   layout: Joi.string().valid(...CARD_LAYOUTS),
//   card_faces: Joi.array().items(
//     Joi.object({
//       name: Joi.string().min(1),
//       image_small: Joi.string().min(1).uri(),
//       image_png: Joi.string().min(1).uri(),
//       image_jpg_normal: Joi.string().min(1).uri(),
//       image_border_crop: Joi.string().min(1).uri(),
//       layout: Joi.string(),
//       type_line: Joi.string(),
//     })
//   ),
//   full_art: Joi.boolean(),
//   reserved: Joi.boolean(),
//   oversized: Joi.boolean(),
//   textless: Joi.boolean(),
//   finish: Joi.string().valid(...FINISH_ENUM),

//   promo: Joi.boolean(),
//   promo_types: Joi.array().items(Joi.string().min(1)),
//   reprint: Joi.boolean(),
//   booster: Joi.boolean(),
//   rarity: Joi.string().valid(...RARITY_ENUM),
//   frame: Joi.string(),
//   colors: Joi.array().items(Joi.string().valid(...COLOR_ENUM)),
//   game_changer: Joi.boolean(),
//   edhrec_rank: Joi.number(),
//   legalities: Joi.object(),
//   prices: Joi.object(),
//   scryfall_last_updated_at: Joi.date(),

//   quantity: Joi.number().integer(),
//   location: Joi.string(),
//   listed_for_sale: Joi.boolean(),
//   listing_platforms: 
// };

// const cardValidation = {
  
// };

// module.exports = cardValidation;