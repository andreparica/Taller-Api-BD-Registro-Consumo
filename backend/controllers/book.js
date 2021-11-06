import book from "../models/book.js";

const registerBook = async (req, res) => {
if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomple data");

const existingBook = await book.findOne({ name: req.body.name });
if (existingBook) return res.status(400).send("The book already exist");

const bookSchema = new book({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
});

const result = await bookSchema.save();
if (!result) return res.status(400).send("Failed to register book");

res.status(200).send({ result });
};

export default { registerBook };
