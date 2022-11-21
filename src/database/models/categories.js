'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
      //this.hasMany(models.Product);
    //}

    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        //as: 'products',
        foreignKey: 'categoryId'
      })
    }
  };
  Categories.init({
    nameCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};