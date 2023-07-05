let ideas = require("../models/idea.model");

exports.getIdeas = (req, res) => {
  //Logic
  res.status(200).send(ideas);
};

exports.postIdea = (req, res) => {
  let id = 1;
  for (const key in ideas) {
    if (key == id) {
      id++;
    }
  }
  ideas[id] = { ...req.body, id };
  res.status(200).send(ideas);
};

exports.deleteIdea = (req, res) => {
  const { id } = req.params
  delete ideas[id];
  res.status(200).send(ideas);
};

exports.putIdea = (req, res) => {
  const { id } = req.params
  if (!ideas[id]) return res.status(400).json({ message: `no idea sir ji! with id: ${id}` });
  ideas[id] = { ...req.body, id };
  res.status(200).send(ideas);
};

exports.patchIdea = (req, res) => {
  const { id } = req.params
  if (!ideas[id]) return res.status(400).json({ message: `no idea sir ji! with id: ${id}` });
  ideas[id] = { ...ideas[id], ...req.body };
  res.status(200).send(ideas);
};
