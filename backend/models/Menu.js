const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database')

const Menu = database.define('Menu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: Sequelize.STRING,
  preco: Sequelize.DECIMAL,
});

module.exports = Menu;