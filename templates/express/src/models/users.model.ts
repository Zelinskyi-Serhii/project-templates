import { DataTypes } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "Users",
  updatedAt: false,
})

export class Users extends Model {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataTypes.STRING,
  })
  phoneNumber: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  activationCode: number | null;

  @Column({
    type: DataTypes.INTEGER,
  })
  resetPasswordCode: number | null;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  twoFactorAuthentication: boolean;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  notifications: boolean;

  @Column({
    type: DataTypes.TEXT,
  })
  avatarUrl: string;

  @Column({
    type: DataTypes.STRING,
  })
  startOfTherapy: string | null;

  @Column({
    type: DataTypes.STRING,
  })
  practiceTime: string | null;
}
