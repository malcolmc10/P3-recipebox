const mongoose = require('mongoose')
const Schema = mongoose.Schema
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
                amount: { type: Number, required: false },
                unit: { type: String, required: false },
                name: { type: String, required: true },
                consistency: { type: String, required: false },
                meta: { type: String, required: false }
            }
        ],
        preparation: [
            {
                step: { type: Number, required: true },
                description: { type: String, required: true },
                stepImage: { type: String, required: false }
            }
        ],
        filters: [{ type: String, required: false }],
        comments: [
            {
                commentAuthor: { type: String, required: true },
                commentDetails: { type: String, required: true },
                commentTime: { type: Number, required: true }
            }
        ]
    },
    { timestamps: true }
)
module.exports = mongoose.model('recipe', Recipe)