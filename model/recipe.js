const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipe = new Schema(
  {
    title: { type: String, required: true },
    coverImage: { type: String, required: false },
    servesPeople: { type: Number, required: false },
    cookTime: { type: Number, required: false },
    cookTimeUnit: { type: String, required: false },
    score: { type: Number, required: false },
    ingredients: [
      {
        amountNum: { type: Number, required: false },
        amountDen: { type: Number,required: false },
        unit: { type: String, required: false },
        name: { type: String, required: true },
        consistency: { type: String, required: false },
        meta: { type: String, required: false },
      },
    ],
    preparation: [
      {
        step: { type: Number, required: true },
        description: { type: String, required: true },
        stepImage: { type: String, required: false },
      },
    ],
    filters: {
      healthy: { type: Boolean, required: false },
      seasonal: { type: Boolean, required: false },
      min30: { type: Boolean, required: false },
      glutenFree: { type: Boolean, required: false },
      vegetarian: { type: Boolean, required: false },
      breakfast: { type: Boolean, required: false },
      lunch: { type: Boolean, required: false },
      dinner: { type: Boolean, required: false },
      dessert: { type: Boolean, required: false },
      snack: { type: Boolean, required: false },
      indian: { type: Boolean, required: false },
      thai: { type: Boolean, required: false },
      japanese: { type: Boolean, required: false },
      french: { type: Boolean, required: false },
      italian: { type: Boolean, required: false },
      mexican: { type: Boolean, required: false },
      american: { type: Boolean, required: false },
      canadian: { type: Boolean, required: false },
      korean: { type: Boolean, required: false },
      polish: { type: Boolean, required: false },
    },
    comments: [
      {
        commentAuthor: { type: String, required: true },
        commentDetails: { type: String, required: true },
        commentTime: { type: String, required: true },
      },
    ],
    tags:{ type: Array, required: false }
  },
  { timestamps: true }
);
module.exports = mongoose.model("recipe", Recipe);
