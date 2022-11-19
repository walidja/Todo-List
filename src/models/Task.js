import { DataTypes, DATE } from "sequelize";
export const TaskSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  date_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  target_day: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
};
