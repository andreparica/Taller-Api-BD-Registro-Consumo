import express from "express";
import book from "../controllers/book.js";

const router = express.Router();

//http://localhost:3001/api/book/registerBook
router.post("/registerBook", book.registerBook);

export default router;
