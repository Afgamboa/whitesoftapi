import User from "../schemas/users.schema.js";

async function newUser(req, res) {
  const { username, countrie } = req.body;

  const newUser = User({ username, countrie });
  await newUser.save();

  return res.status(200).json({ newUser });
}

export { newUser };
