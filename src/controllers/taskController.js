const prisma = require("../prisma");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const id = Number(req.params.id);

  const task = await prisma.task.update({
    where: { id },
    data: req.body,
  });

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const id = Number(req.params.id);

  await prisma.task.delete({
    where: { id },
  });

  res.json({ message: "Deleted" });
};
