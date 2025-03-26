import {Sequelize}  from 'sequelize'

// setting up sequelize

const DB = 'huruma2';
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
      timestamps: false,
      freezeTableName: true,

    },
  },

);

export {db};
