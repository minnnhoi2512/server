//CRUD 
import GradeModel from "../model/Grade.model.js";

export async function createGrade(req, res) {
    const {
        instructor,
        course,
        gradeName,
        description,
        startTimeGrade,
        endTimeGrade
    } = req.body
    try {
        const existingGrade = await GradeModel.find({ gradeName: gradeName })
        debugger
        if (existingGrade.length != 0) return res.status(409).json({ error: "Grade already exist" })

        const newGrade = await GradeModel.create({
            instructor,
            course,
            nOfStudent: 0,
            description,
            gradeName,
            startTimeGrade,
            endTimeGrade,
        })
        debugger
        res.status(201).json({
            msg: 'Create new Grade success',
            data: newGrade
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function getAllGrades(req, res) {
    try {
        const allGrades = await GradeModel.find()
        res.status(200).json(
            allGrades
        )
    } catch (error) {
        res.status(500).json({
            msg: 'Failed'
        })
    }
}
export async function deleteGrade(req, res) {
    const id = req.params.id
    try {
        const deleteGrade = await GradeModel.deleteOne({ _id: id })
        res.status(202).json({
            msg: 'Delete Success'
        })
    } catch (error) {
        res.status(204).json({
            msg: 'Cannot delete'
        })
    }
}
export async function updateGrade(id) {
    try {
        const updateGrade = await GradeModel.findById({id });
        debugger
        
        updateGrade.nOfStudent =  updateGrade.nOfStudent + 1;
        await updateGrade.save();
        return 1;
    } catch (error) {
        return 0;
    }
}

// co dinh k update