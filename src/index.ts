import express from 'express'
import cors from 'cors'
import { db } from './lib/db'
import { orderRouter } from './routes/order.routes';

const app = express()

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use('/api/orders', orderRouter);

( async()=>{
    await db.authenticate().then(()=>{
        console.log('Connected to db')
    }).catch(error=>
        console.error('Unable to connect to db!!', error)
    )
})();

app.listen(PORT, ()=>{
    console.log(`App running http://localhost:${PORT}`)
})