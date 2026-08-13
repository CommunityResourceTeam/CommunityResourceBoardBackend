const { connectMongoose } = require('../connect');
const collectionName = process.env.DB_COLL_TAGS;
const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
  tagId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  color: String,
  language: Boolean
});

class TagClass {

}

tagSchema.loadClass(TagClass);
const Tag = model('Tag', tagSchema, collectionName);
module.exports = Tag;
