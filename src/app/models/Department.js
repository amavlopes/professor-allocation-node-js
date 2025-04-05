const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db/conn");

class Department extends Model {}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "department",
    tableName: "departments",
    timestamps: true,
  }
);

module.exports = Department;
