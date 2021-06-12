const multer = require("multer");
const fs = require("fs");
const path = require("path");

const __basedir = path.resolve(path.dirname(""));

const resources = __basedir + "/assets/products/images/";

if (!fs.existsSync(resources)) {
  fs.mkdirSync(resources, { recursive: true });
}

const filterImage = (request, file, cb) => {
  if (file.mimetype.includes("jpeg") || file.mimetype.includes("jpg")) {
    cb(null, true);
  } else {
    cb("Only jpeg or jpg files are allowed", false);
  }
};

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, resources);
  },
  filename: (request, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: filterImage });
module.exports = uploadFile;
