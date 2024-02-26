import { Op } from "sequelize";
import { PlanedTasks } from "../models/planedTasks.model";
import { Tags } from "../models/tags.model";
import { Users } from "../models/users.model";

const findUserByEmail = (email: string) => {
  return Users.findOne({ where: { email } });
};

const findUserById = (id: number) => {
  return Users.findOne({ where: { id } });
};

const deleteUserByEmail = (email: string) => {
  return Users.destroy({ where: { email }, cascade: true });
};

const addSkillTagByUserId = (userId: number, skillTag: string) => {
  return Tags.create({ skillTag, userId });
};

const removeSkillTagById = (tagId: number) => {
  return Tags.destroy({ where: { id: tagId } });
};

const createTask = (newTask: {
  userId: number;
  isDone: boolean;
  task: string;
  date: string;
  isExactTime: boolean;
}) => {
  return PlanedTasks.create(newTask);
};

const getAllTasks = (userId: number) => {
  const date = new Date();

  return PlanedTasks.findAll({
    where: {
      userId,
      date: { [Op.lt]: date },
    },
    attributes: { exclude: ["userId"] },
  });
};

const deleteTask = (id: number) => {
  return PlanedTasks.destroy({ where: { id } });
};

const getTaskById = (taskId: number) => {
  return PlanedTasks.findByPk(taskId);
};

export const userService = {
  findUserByEmail,
  deleteUserByEmail,
  addSkillTagByUserId,
  removeSkillTagById,
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  findUserById
};
