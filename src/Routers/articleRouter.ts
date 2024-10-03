const expressServer = require("express");
const blogController = require("../Controllers/blogController");
const blogRouter = expressServer.Router();
const tokenauth = require("../middleware/authJWT");
const validate = require("../validator/validator"); // Import the validation middleware
blogRouter.use(expressServer.json());

blogRouter.post(
  "/addArticle",
  validate.validateAddArticle,
  tokenauth.verifyToken,
  blogController.addArticle
);
blogRouter.get(
  "/getAllArticlesOfLoggedInUser",
  tokenauth.verifyToken,
  blogController.getAllArticlesByUser
);
blogRouter.patch(
  "/updateArticle/:id",
  validate.validateUpdateArticle,
  tokenauth.verifyToken,
  blogController.updateArticle
);
blogRouter.get(
  "/getBlogByUserId/:id",
  tokenauth.verifyToken,
  blogController.deleteArticles
);

blogRouter.delete(
  "/deleteBlogs/:_id",
  tokenauth.verifyToken,
  blogController.deleteArticles
);



module.exports = blogRouter;
