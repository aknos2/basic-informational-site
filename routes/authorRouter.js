import { Router } from "express";

export const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('All authors'));
authorRouter.get('/:authorId', (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`)
});