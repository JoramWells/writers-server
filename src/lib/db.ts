import {Sequelize}  from 'sequelize'

// setting up sequelize

const DB = 'writers';
const USERNAME = 'postgres';
const PASSWORD = 'postgres';

const db = new Sequelize(
  DB,
  USERNAME,
  PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,

    },
  },

);

export {db};
