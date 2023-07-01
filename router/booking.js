import { Router } from "express";

import * as bookingController from '../controllers/booking.js'
const router = Router();

router.route('/createBooking').post(bookingController.createBooking);
router.route('/getAllBookings').get(bookingController.getAllBookings);
router.route('/deleteBooking/:id').delete(bookingController.deleteBooking);
router.route('/updateBooking/:id').post(bookingController.updateBooking);

export default router;