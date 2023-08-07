var express = require("express");

const routeLabel = require("route-label");
const router = express.Router();
const namedRouter = routeLabel(router);
const ArticleController = require("../controllers/article.controller");

/* GET users listing. */
router.get("/", ArticleController.articlelist);
router.get("/create-article", ArticleController.renderCreateArticle);
// router.get("/article" , (res, req, next)=>{
//     res.render("/page/article");
// })
router.get("/:id", ArticleController.articledetail);
router.post("/add", ArticleController.createarticle);
router.post("/update", ArticleController.updatearticle);
router.get("/remove/:id", ArticleController.deletearticle);

module.exports = router;
