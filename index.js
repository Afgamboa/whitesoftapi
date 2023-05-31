import express from "express";
import { getCountries } from "./src/api/countries.js";
import user from "./src/routes/user.js";
import connect from "./src/conexion.js";
import { config } from "./src/config.js";

const app = express();
connect();
const port = config.PORT;

app.use(express.json());

app.use("/countries", async (req, res) => {
  const response = await getCountries();
  if (response) {
    return res.status(200).json({ countries: response });
  } else {
    return res.status(500).json({ message: "Server Error" });
  }
});

app.use("/user", user);

app.listen(port, () => {
  console.log("Server running on port", port);
});
