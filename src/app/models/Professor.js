const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db/conn");
const Department = require("./Department");

class Professor extends Model {}

Professor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{11}$/,
      },
    },
  },
  {
    sequelize,
    modelName: "professor",
    tableName: "professors",
  }
);

Professor.belongsTo(Department, {
  foreignKey: {
    name: "departmentId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Professor;
