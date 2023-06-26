import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv'
import connect from './database/conn.js';
import router from './router/route.js';
import adminRouter from './router/admin.js'

import blogRouter from './router/blog.js'
import classRouter from './router/class.js'
import bookingRouter from './router/booking.js'
import courseRouter from './router/course.js'


dotenv.config()
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)
app.use('/admin', adminRouter)

app.use('/blog', blogRouter)
app.use('/booking', bookingRouter)
app.use('/class', classRouter)
app.use('/course', courseRouter)

/** start server only when we have valid connection */
app.listen(port, async (req, res) => {
    connect()
    console.log(`Listening on port : ${port}`)
})
