import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import BOOK_DATA from "./book-data.js";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

app.get("/api/books", (req, res) => {
  res.json(BOOK_DATA);
});

ViteExpress.listen(app, port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
