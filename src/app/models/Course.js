const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db/conn");

class Course extends Model {}

Course.init(
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
    modelName: "course",
    tableName: "courses",
  }
);

module.exports = Course;
