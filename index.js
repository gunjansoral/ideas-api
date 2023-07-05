const express = require("express");
const app = express();
app.use(express.json())

require("./routes/idea.routes")(app);

app.listen(3700, () => {
  console.log("Server is running on PORT 3700");
});
