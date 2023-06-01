import User from "../schemas/users.schema.js";

async function newUser(req, res) {
  const { username, country } = req.body;
  const newUser = User({ username, country });
  await newUser.save();

  return res.status(200).json({ message: 'Usuario registrado!', user: newUser });
}

export { newUser };

