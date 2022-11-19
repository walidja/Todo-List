import { DataTypes } from "sequelize";
export const ProjectSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};
