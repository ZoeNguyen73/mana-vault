const mongoose = require("mongoose");

const { LANG_ENUM, FINISH_ENUM, RARITY_ENUM, COLOR_ENUM } = require("../utils/cardAttributes");

const cardFaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image_small: { type: String },
  image_png: { type: String },
  image_jpg_normal: { type: String },
  image_border_crop: { type: String },
  layout: { type: String },
  type_line: { type: String, required: true }
});

const cardPricesSchema = new mongoose.Schema({
  "usd": { type: String },
  "usd_foil": { type: String },
  "usd_etched": { type: String },
});

const cardSchema = new mongoose.Schema({
  scryfall_id: { type: String, required: true, unique: true },
  scryfall_uri: { type: String, required: true },
  set_code: { type: String, required: true },
  set_name: { type: String, required: true },
  collector_number: { type: String, required: true },
  name: { type: String, required: true },
  lang: { type: String, enum: LANG_ENUM, required: true, default: "en" },
  
  layout: { type: String, required: true, default: "normal" },
  card_faces: {
    // array of card faces for this card
    // normal cards will have only 1 face in this array
    type: [cardFaceSchema],
    required: true,
  },
  full_art: { type: Boolean, required: true, default: false },
  reserved: { type: Boolean, required: true, default: false },
  finish: { type: String, enum: FINISH_ENUM, required: true, default: "nonfoil" },
  oversized: { type: Boolean, required: true },
  textless: { type: Boolean, required: true },

  promo: { type: Boolean, required: true },
  promo_types: { type: [{type: String}] },
  reprint: { type: Boolean, required: true },
  booster: { type: Boolean, required: true },
  rarity: { type: String, enum: RARITY_ENUM, required: true },
  frame: { type: String, required: true },
  colors: {
    type: [{ type: String, enum: COLOR_ENUM }],
    required: true,
  },
  game_changer: { type: Boolean, required: true, default: false },
  edhrec_rank: { type: Number },
  legalities: { type: Object, default: {} },
  prices: { type: cardPricesSchema, required: true, default: {} },

  scryfall_last_updated_at: { type: Date },
    
  quantity: { type: Number, required: true, default: 0 },
  location: { type: String },
  listed_for_sale: { type: Boolean, required: true, default: false },
  listing_platforms: { type: [String] },
  listing_price_sgd: { type: Number },

}, { timestamps: true });

const CardModel = mongoose.model("Card", cardSchema);

module.exports = CardModel;