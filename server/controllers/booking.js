//CRUD 
import BookingModel from "../model/Booking.model.js";

export async function createBooking(req, res) {
    const {
        courseId,
        user,
    } = req.body
    try {
        const newBooking = await BookingModel.create({
            courseId,
            user,
            isAccepted : 0
        })
        debugger
        res.status(201).json({
            msg: 'Create new Booking success',
            data: newBooking
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function getAllBookings(req, res) {
    try {
        const allBookings = await BookingModel.find()
        res.status(200).json(
            allBookings
        )
    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function deleteBooking(req, res) {
    const id = req.params.id
    try {
        const deleteBooking = await BookingModel.deleteOne({ _id: id })
        res.status(202).json({
            msg: 'Delete Success'
        })
    } catch (error) {
        res.status(204).json({
            msg: 'Cannot delete'
        })
    }
}
export async function updateBooking(req, res) {
    const id = req.params.id

    try {
        const updateBooking = await BookingModel.findById({ _id: id })
        updateBooking.isAccepted = 1;
        await updateBooking.save()
        res.status(200).json({
            msg: 'Update Success'
        })
    } catch (error) {
        res.status(204).json({
            msg: 'Cannot update'
        })
    }
}