'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List_Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List_Song.init({
    
  }, {
    sequelize,
    modelName: 'List_Song',
    createdAt: false,
    updatedAt: false,
    tableName: 'List_Song'
  });
  return List_Song;
};