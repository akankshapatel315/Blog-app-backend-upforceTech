const expressServer = require("express");
const blogController = require("../Controllers/blogController");
const blogRouter = expressServer.Router();
const tokenauth = require("../middleware/authJWT");

blogRouter.use(expressServer.json());

blogRouter.post(
  "/addArticle",
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
