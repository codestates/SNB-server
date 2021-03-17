'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const {User, List, Song, List_Song} = sequelize.models;
List.belongsTo(User);
User.hasMany(List);

List.belongsToMany(Song, {through: 'List_Song', foreignKey: 'ListId', as: 'Song'});
Song.belongsToMany(List, {through: 'List_Song', foreignKey: 'SongId', as: 'List'});

List_Song.belongsTo(List, {
  foreignKey: 'ListId', 
  as: 'List' 
});

List_Song.belongsTo(Song, {
  foreignKey: 'SongId', 
  as: 'Song' 
});

module.exports = db;
