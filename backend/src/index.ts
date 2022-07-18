import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts";
import commentsRouter from "./routes/comments";
import db from "./models/index";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const options: cors.CorsOptions = {
  origin:["http://localhost:3000", "http://localhost:3001"],
  optionsSuccessStatus: 200
};

//MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
  console.log("Incoming request: ", req.method, req.path, res.statusCode);
  next();
});
app.use(cors(options));

//ROUTES
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});


