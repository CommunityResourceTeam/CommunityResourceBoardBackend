const { connectMongoose } = require('../connect');
const collectionName = process.env.DB_COLL_POSTS;
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  authorId: String,
  title: String,
  description: String,
  location: {
    address: String,
    city: String,
    state: String,
    zip: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  hours: {
    monday: [{ open: String, close: String }],
    tuesday: [{ open: String, close: String }],
    wednesday: [{ open: String, close: String }],
    thursday: [{ open: String, close: String }],
    friday: [{ open: String, close: String }],
    saturday: [{ open: String, close: String }],
    sunday: [{ open: String, close: String }]
  },
  website: String,
  tags: [{
    tagId: Number,
    name: String
  }],
  comments: [{
    _id: String,
    authorId: String,
    authorUsername: String,
    body: String,
    createdAt: Date
  }]
});

class PostClass {

}

postSchema.loadClass(PostClass);
const Post = model('Post', postSchema, collectionName);
module.exports = Post;
