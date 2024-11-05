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
  descricao: {
    type: Sequelize.STRING,
    allowNull: true
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  tempo_preparo: Sequelize.INTEGER,
  tamanho: Sequelize.STRING,
  img: Sequelize.STRING
});

module.exports = Menu;