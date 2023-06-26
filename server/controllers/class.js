//CRUD 
import ClassModel from "../model/Class.model.js";

export async function createClass(req, res) {
    const {
        instructor,
        user,
        course,
        className,
        startTimeClass,
        endTimeClass
    } = req.body
    try {
        const newClass = await ClassModel.create({
            instructor,
            user,
            course,
            className,
            startTimeClass,
            endTimeClass
        })
        debugger
        res.status(201).json({
            msg: 'Create new Class success',
            data: newClass
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function getAllClasses(req, res) {
    try {
        const allClasss = await ClassModel.find()
        res.status(200).json({
            allClasss
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function deleteClass(req, res) {
    const id = req.params.id
    try {
        const deleteClass = await ClassModel.deleteOne({ _id: id })
        res.status(202).json({
            msg: 'Delete Success'
        })
    } catch (error) {
        res.status(204).json({
            msg: 'Cannot delete'
        })
    }
}
// export async function updateClass(req, res) {
//     const id = req.params.id
//     const {
//         instructor,
//         startTimeClass,
//         endTimeClass
//     } = req.body
//     try {
//         const updateClass = await ClassModel.findById({ _id: id })
//         updateClass.instructor = instructor || updateClass.instructor;
//         updateClass.startTime = startTime || updateClass.startTime;
//         updateClass.endTime = endTime || updateClass.endTime;
//         await updateClass.save()
//         res.status(200).json({
//             msg: 'Update Success'
//         })
//     } catch (error) {
//         res.status(204).json({
//             msg: 'Cannot update'
//         })
//     }
// }

// co dinh k update