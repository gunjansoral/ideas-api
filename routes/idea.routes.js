const ideaController = require("../controllers/idea.controller");

module.exports = (app) => {
  app.get("/ideaApp/api/v1/ideas", ideaController.getIdeas);
  app.post("/ideaApp/api/v1/ideas", ideaController.postIdea);
  app.put("/ideaApp/api/v1/ideas/:id", ideaController.putIdea);
  app.patch("/ideaApp/api/v1/ideas/:id", ideaController.patchIdea);
  app.delete("/ideaApp/api/v1/ideas/:id", ideaController.deleteIdea);
};
