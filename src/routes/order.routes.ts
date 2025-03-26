import express from 'express'
import OrderController from '../controllers/order.controller';

const router = express.Router()

const {addOrder, getAllOrders, getOrderByPatientID, getOrderDetail, editOrderDetail, deleteOrder} = new OrderController()

router.post('/add', addOrder);
router.get('/fetchAll', getAllOrders);
router.get('/queue', getOrderByPatientID);
router.get('/detail/:id', getOrderDetail);
router.put('/edit', editOrderDetail);
router.delete('/delete/:id', deleteOrder);

export { router as orderRouter}