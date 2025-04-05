const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db/conn");
const Professor = require("./Professor");
const Course = require("./Course");

class Allocation extends Model {}

Allocation.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 7,
      },
    },
    startHour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endHour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "allocation",
    tableName: "allocations",
  }
);

Allocation.belongsTo(Professor, {
  foreignKey: {
    name: "professorId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

Allocation.belongsTo(Course, {
  foreignKey: {
    name: "courseId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Allocation;
