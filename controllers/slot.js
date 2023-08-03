//CRUD slot 
import SlotModel from "../model/Slot.model.js";
import {DateTime} from 'luxon'
export async function createSlot(req, res) {
    const {
        grade,
        user,
        date,
        isAttended,

    } = req.query
    try {
        debugger
        // let day = new Date("yyyy/mm/dd").toLocaleString("en-CA",{timeZone:"Asia/Ho_Chi_Minh"});
        const today = DateTime.now().setZone('Asia/Ho_Chi_Minh').toISODate();
        // day.getDate();
        // day.setHours(7);
        // day.setMinutes(0);
        // day.setSeconds(0);
        // day.setMilliseconds(0);
        // debugger
        // let element = day.toString().split(",");
        const existSlot = await SlotModel.findOne({ grade: grade, user: user, date: today })
        if (existSlot != null) {
            existSlot.isAttended = isAttended || existSlot.isAttended;
            await existSlot.save();
            res.status(200).json(existSlot)
        } else {
            // 2023-08-03T09:29:52.365Z
            const newSlot = await SlotModel.create({
                grade,
                user,
                date: today,
                isAttended: isAttended || 0,
            })
            // debugger
            res.status(201).json(newSlot)
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Failed haha   '
        })
    }
}

export async function getAllSlotOfUser(req, res) {
    const id = req.params.id
    try {
        // debugger
        const allSlot = await SlotModel.find({ user: id })
        res.status(200).json(allSlot)
    } catch (error) {
        res.status(500).json({
            msg: 'Sever error !!!'
        })
    }
}
export async function getAllSlotInDay(req, res) {
    const grade = req.query.grade
    const date = req.query.date
    try {
        // debugger
        const allSlot = await SlotModel.find({ grade: grade,date : date }).populate("user").populate("grade")
        res.status(200).json(allSlot)
    } catch (error) {
        res.status(500).json({
            msg: 'Sever error !!!'
        })
    }
}