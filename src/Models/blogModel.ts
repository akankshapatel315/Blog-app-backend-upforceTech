const DB = require("mongoose");

var blogSchema = new DB.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = DB.model("Blog", blogSchema);

module.exports = BlogModel;
