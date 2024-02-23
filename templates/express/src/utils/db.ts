import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import pg from "pg";
import { Users } from "../models/users.model";
import { Surveys } from "../models/surveys.model";
import { SurveyQuestions } from "../models/surveyQuestions.model";
import { WorksExperiences } from "../models/worksExperiences.model";
import { EducationsResponsibilities } from "../models/educationsResponsibilities.model";
import { Tags } from "../models/tags.model";
import { WorksResponsibilities } from "../models/worksResponsibilities.model";
import { EducationExperiences } from "../models/educationsExperiences.model";
import { PlanedTasks } from "../models/planedTasks.model";
import { PatientAnswersTitle } from "../models/patientAnswersTitle.model";
import { PatientAnswers } from "../models/patientAnswers";
import { SendedSurveys } from "../models/sendedSurveys";
import { PaymentHistory } from "../models/paymentHistory";

const DATABASE_URL = process.env.DATABASE_URL || "";

export const connectToDB = async () => {
  const sequelize = new Sequelize(DATABASE_URL, {
    dialectModule: pg,
    dialect: "postgres",
    logging: false,
    models: [
      Users,
      Surveys,
      SurveyQuestions,
      WorksExperiences,
      EducationsResponsibilities,
      Tags,
      WorksResponsibilities,
      EducationExperiences,
      PlanedTasks,
      PatientAnswersTitle,
      PatientAnswers,
      SendedSurveys,
      PaymentHistory,
    ],
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

  // #region association
  Surveys.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(Surveys, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  PaymentHistory.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(PaymentHistory, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  PlanedTasks.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(PlanedTasks, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  SurveyQuestions.belongsTo(Surveys, {
    foreignKey: "surveyId",
    onDelete: "CASCADE",
  });

  Surveys.hasMany(SurveyQuestions, {
    foreignKey: "surveyId",
    onDelete: "CASCADE",
  });

  Tags.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(Tags, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    as: "tags",
  });

  WorksExperiences.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(WorksExperiences, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    as: "workExperience",
  });

  WorksResponsibilities.belongsTo(WorksExperiences, {
    foreignKey: "experienceId",
    onDelete: "CASCADE",
  });

  WorksExperiences.hasMany(WorksResponsibilities, {
    foreignKey: "experienceId",
    onDelete: "CASCADE",
    as: "responsibilities",
  });

  EducationExperiences.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(EducationExperiences, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    as: "educationExperience",
  });

  EducationsResponsibilities.belongsTo(EducationExperiences, {
    foreignKey: "experienceId",
    onDelete: "CASCADE",
  });

  EducationExperiences.hasMany(EducationsResponsibilities, {
    foreignKey: "experienceId",
    onDelete: "CASCADE",
    as: "responsibilities",
  });

  PatientAnswersTitle.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(PatientAnswersTitle, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  PatientAnswers.belongsTo(PatientAnswersTitle, {
    foreignKey: "patientAnswersTitleId",
    onDelete: "CASCADE",
  });

  PatientAnswersTitle.hasMany(PatientAnswers, {
    foreignKey: "patientAnswersTitleId",
    onDelete: "CASCADE",
    as: "answers",
  });

  SendedSurveys.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });

  Users.hasMany(SendedSurveys, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
  //#endregion

  try {
    await sequelize.sync({ alter: false });
    // await sequelize.authenticate();
    console.log("You was connected to DB successfuly");
  } catch (e){
    console.log("Unable connect to DB", e);
  }
};
