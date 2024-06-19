const express = require("express");

const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
router.get("/", async (req, res) => {
  const { filter } = req.query;
  let boards;
  if (filter == "all") {
    boards = await prisma.board.findMany();
  } else {
    boards = await prisma.board.findMany({ where: { category: filter } });
  }
  return res.json(boards);
});

router.post("/", async (req, res) => {
  const { title, category, author, image } = req.body;
  const newBoard = await prisma.board.create({
    data: { title, category, author, image },
  });
  res.json(newBoard);
});

router.get("/search", async (req, res) => {
  const { boardName } = req.query;
  try {
    const searchedBoards = await prisma.board.findMany({
      where: { title: boardName }, // Replace "desiredTitle" with the actual title you are searching for
    });
    res.json(searchedBoards);
  } catch (error) {
    console.error(error); // Log the error to help diagnose the issue
    res.status(500).send("Internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const searchedBoard = await prisma.board.findUnique({
      where: { boardId: parseInt(id) },
    });
    res.json(searchedBoard);
  } catch (error) {
    console.error(error); // Log the error to help diagnose the issue
    res.status(500).send("Internal server error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBoard = await prisma.board.delete({
      where: { boardId: parseInt(id) },
    });
    res.json(deletedBoard);
  } catch (error) {
    console.error(error); // Log the error to help diagnose the issue
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
