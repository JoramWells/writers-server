import { UserInterface, UserTypeInterface } from "motherangela";
import { Model, DataTypes } from "sequelize";
import { db } from "../utils/db";

export class Users extends Model<UserInterface> implements UserInterface{
  id_no!: string;
  user_id!: string;
  user_type_id!: string;
  user_type?: UserTypeInterface | undefined;
  full_name!: string;
  user_name!: string;
  email!: string;
  password!: string;
  status!: string;
  hospital_id!: string;
  navigation_style!: string;
  consultation_income_percentage!: string;
  procedure_income_percentage!: string;
}

Users.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_no: {
    type: DataTypes.STRING,
  },
  user_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user_types',
      key: 'user_type_id',
    },
    onDelete: 'CASCADE',
    // type: DataTypes.INTEGER,

  },
  full_name: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.STRING,
  },
  navigation_style: {
    type: DataTypes.STRING,
  },
  consultation_income_percentage: {
    type: DataTypes.STRING,
  },
  procedure_income_percentage: {
    type: DataTypes.STRING,
  },
},
{
  tableName:'users',
  sequelize: db
});

// Users.belongsTo(UserTypes, { foreignKey: 'user_type_id' });
// UserTypes.hasMany(Users, { foreignKey: 'user_type_id' });
// UserTypes.hasMany(Users, { foreignKey: 'user_type_id' });
