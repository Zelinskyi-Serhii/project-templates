import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import pg from "pg";
import { Users } from "../models/users.model";

const DATABASE_URL = process.env.DATABASE_URL || "";

export const connectToDB = async () => {
  const sequelize = new Sequelize(DATABASE_URL, {
    dialectModule: pg,
    dialect: "postgres",
    logging: false,
    models: [Users],
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

  try {
    // Change alter to true to update the database schema
    await sequelize.sync({ alter: false });
    // await sequelize.authenticate();
    console.log("You was connected to DB successfuly");
  } catch (e) {
    console.log("Unable connect to DB", e);
  }
};
