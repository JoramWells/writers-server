import { OrderInterface } from "x-writers";
import { Model, DataTypes, UUIDV4 } from "sequelize";
import { db } from "../lib/db";

export class Order extends Model<OrderInterface> implements OrderInterface{
  id!: string;
  topic!: string;
  description!: string;
  dateAssigned!: Date;
  submissionTime!: Date;
  complexity!: string;
  assignStatus!: string;

}

Order.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  topic: {
    type: DataTypes.STRING,
  },
//   user_type_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'user_types',
//       key: 'user_type_id',
//     },
//     onDelete: 'CASCADE',
//     // type: DataTypes.INTEGER,

//   },
  description: {
    type: DataTypes.STRING,
  },
//   attachments: {
//     type: DataTypes.STRING,
//   },
  dateAssigned: {
    type: DataTypes.DATE,
  },
  submissionTime: {
    type: DataTypes.DATE,
  },
  complexity: {
    type: DataTypes.STRING,
  },
  assignStatus: {
    type: DataTypes.STRING,
  },
},
{
  tableName:'orders',
  sequelize: db
});

(async()=>await db.sync().then().then(()=>{
  console.log('Order Table Created.')
}).catch(error=>{
  console.error('Unable to create table:', error)
}))()

// Users.belongsTo(UserTypes, { foreignKey: 'user_type_id' });
// UserTypes.hasMany(Users, { foreignKey: 'user_type_id' });
// UserTypes.hasMany(Users, { foreignKey: 'user_type_id' });
