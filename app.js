const express = require("express");
const cors = require("cors");
const path = require("path");
const ApiMainRouter = require("./routes/route.main");

const app = express();
const APP_PORT = 3000;

app.set("trust proxy", true);

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, s-maxage=3600");
  next();
});

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/animation",
  express.static("public/animation", { maxAge: "1y", immutable: true })
);

app.use(
  "/images",
  express.static("public/images", { maxAge: "1y", immutable: true })
);

app.use(ApiMainRouter);

app.listen(APP_PORT, () => {
  console.log(`Server berjalan di port ${APP_PORT}`);
});
