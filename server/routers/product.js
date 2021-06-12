const { Router } = require("express");
const ProductController = require("../controllers/ProductController");
const uploadFile = require("../middleware/multer");

const router = Router();

router.post(
  "/sneaker",
  uploadFile.single("picture"),
  ProductController.createProduct
);
router.get("/sneakers", ProductController.getAllSneakers);

router.get("/sneaker/:id", ProductController.getOneSneaker);

module.exports = router;
