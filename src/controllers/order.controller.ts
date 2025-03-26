import { NextFunction, Request, Response } from "express";
import { Order } from "../models/order.model";
import { calculateLimitAndOffset } from "../utils/calculateLimitAndOffset";
import { Op, WhereOptions } from "sequelize";

export default class OrderController {


  // const kafka = new Kafka({
  //   clientId: 'Order',
  //   brokers: ['kafka:9092', 'kafka:9092'],
  // });

  // const consumer = kafka.consumer({ groupId: 'Order-create-group' });

  // const addOrder = async (req: Request, res: Response, next: NextFunction) => {
  // await consumer.connect();
  // await consumer.subscribe({ topic: 'register-patient' });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       partition,
  //     });
  //   },
  // });
  // };

  async addOrder(req: Request, res: Response, next: NextFunction) {

    const newOrder = await Order.create(req.body);
    res.status(200).json(newOrder);
    next();
  };

  // get all priceListItems
  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    const {
      page, pageSize, searchQuery, hospital_id,
    } = req.query;
    let where = {};

    const { limit, offset } = calculateLimitAndOffset(page as unknown as number, pageSize as unknown as number);

    if (typeof hospital_id === 'string' && hospital_id?.length > 0 && hospital_id !== 'undefined') {
      where = {
        ...where,
        hospital_id,
      };
    }

    if (searchQuery) {
      where = {
        ...where,
        [Op.or]: [
          { first_name: { [Op.iLike]: `%${searchQuery}%` } },
          { middle_name: { [Op.iLike]: `%${searchQuery}%` } },
          { last_name: { [Op.iLike]: `%${searchQuery}%` } },
        ],
      };
    }

    const { rows, count } = await Order.findAndCountAll({
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });

    res.status(200).json({
      data: rows,
      total: count,
      page,
      pageSize: limit,
    });
    // console.log(OrderResults);

    console.log('fetching data..');
    next();

  };


  async getOrderByPatientID(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
      const results = await Order.findOne({
        order: [['Order_date', 'DESC']],
        where: {
          patient_id: id,
        },
        // include: [
        //   {
        //     model: Account_type,
        //     attributes: ['account_type_description'],
        //   },
        // ],
      });
      res.json(results);
      next();
  };

  async getOrderDetail(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
      const result = await Order.findOne({
        where: {
          Order_id: id,
        },
        // include: [
        //   {
        //     model: Patient,
        //     attributes: ['first_name', 'middle_name', 'dob', 'patient_gender'],

        //   },
        //   {
        //     model: Insurance,
        //     attributes: ['insurance_name'],
        //   },
        //   {
        //     model: Users,
        //     attributes: ['full_name'],
        //   },
        //   {
        //     model: ConsultationTypeGroup,
        //     attributes: ['consultation_type_group_description'],
        //   },
        // ],
      });
      res.json(result);
      next();

  };

  async editOrderDetail(req: Request, res: Response, next: NextFunction) {
    const { id, Order_date } = req.body;

      const result = await Order.findOne({
        where: {
          Order_id: id,
        },
      })

    //   if (Order) {
    //     Order.Order_date = Order_date;
    //     await Order.save();
    //     res.status(200).json({ message: 'Order updated successfully' });
    //     next();
    //   } else {
    //     res.status(404).json({ message: 'Order not found' });
    //     next();
    //   }

 

  };


  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
      const result = await Order.destroy({
        where: {
          id: id,
        },
      })

      if (result) {
        res.status(200).json({ message: 'Order deleted successfully' });
        next();
      }
      res.status(404).json({ message: 'Order not found' });
      next()

  };


}