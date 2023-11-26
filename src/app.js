import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
// import { connectMongoDB } from "./database/connect";
// import routes from "./routes";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
// connectMongoDB();
morgan("tiny");
app.use(
  cors({
    credentials: true,
    origin: [CLIENT_URL],
    optionSuccessStatus: 200,
  })
);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", CLIENT_URL);
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//
// routes.forEach((item) =>
//   item.routes.forEach((route) =>
//     app.use("/api" + item.prefix + route.path, route.route)
//   )
// );

app.listen(PORT, () => {
  console.log(`[SUCCESS] ::: Server is listening on port: ${PORT}`);
});
