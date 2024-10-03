const Blog = require("../Models/blogModel");
const authentication = require("../middleware/authJWT");

const addArticle = async (req: any, res: any) => {
  try {
    const { title, content, userId } = req.body;
    const createdBy = req.body.userId || "90909";
    const newBlog = await new Blog({
      title,
      content,
      createdBy,
    });
    await Blog.create(newBlog);

    res.status(200).send({ newBlog, message: "Blog created successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllArticlesByUser = async (req: any, res: any) => {
  try {
    const userId = req.body.userId;
    const articles = await Blog.find({ createdUserId: userId });
    res.status(200).send({ articles, message: "Blogs are fetched successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getAllArticles = async (req: any, res: any) => {
  try {
    const articles = await Blog.find();
    res.status(200).send({ articles, message: "Blogs are fetched successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArticles = async (req: any, res: any) => {
  try {
    const id = req.params;
    const data = await Blog.findByIdAndDelete(id);
    res.send(`${data} has been deleted..`);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

const getArticleByUser = async (req: any, res: any) => {
  try {
    const id = req.query._id;
    const result = await Blog.find(id);
    if (!result) {
      res.status(200).send("Not Found Blog");
    }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateArticle = async (req: any, res: any) => {
  try {
    const id = req.params._id;
    const updatedData = req.body;
    const result = await Blog.findByIdAndUpdate({ _id: updatedData.id },
      {
        title: updatedData.title,
        content: updatedData.content,
        updatedAt: new Date()
      });
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { addArticle, getAllArticlesByUser, deleteArticles, updateArticle, getAllArticles };
