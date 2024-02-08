import todoModel from "../model/todo.model";

export const addTodo = async (req, res) =>{
    try {
        const addData = new todoModel(req.body)
        const addTodoData = await addData.save();
        
        if(addTodoData){
            res.status(200).json({
                data:addTodoData,
                message:"Todo added Successfully"
            })
        }else{
            res.status(400).json({
                message:"Cannot add todo"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:`Server Error: ${error.message}`
        })
    }
}

export const getTodo = async (req, res) =>{
    try {
        const getTodoData = await todoModel.find();
        if(getTodoData){
            res.status(200).json({
                data:getTodoData,
                message:"Data fetched Successfully"
            })
        }else{
            res.status(400).json({
                message:"Cannot fetch data"
            })
        }
    } catch (error) {
        res.status(500).json({
            data:`Server Error: ${error.message}`
        })
    }
}

export const getSingleTodo = async (req, res) =>{
    try {
        const todoID = req.params.todoID
        const getTodoData = await todoModel.findOne({_id:todoID});
        if(getTodoData){
            res.status(200).json({
                data:getTodoData,
                message:"Data fetched Successfully"
            })
        }else{
            res.status(400).json({
                message:"Cannot fetch data"
            })
        }
    } catch (error) {
        res.status(500).json({
            data:`Server Error: ${error.message}`
        })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoID = req.params.todoID;
        const getData = await todoModel.findOne({_id: todoID});
        const deleteTodoData = await todoModel.deleteOne({_id: todoID});
        if(deleteTodoData.acknowledged){
            res.status(200).json({
                data: getData,
                message: 'Data deleted successfully'
            })
        }else{
            res.status(400).json({
                message: "Cannot delete data"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: `Server Error: ${error.message}`
        })
    }
}

export const updateTodo = async (req, res) => {
    try {
        const todoID = req.params.todoID;
        // console.log(req.body,"req.body")
        const updateTodoData = await todoModel.updateOne({_id:todoID},{
            $set:req.body
        })        
        const getData = await todoModel.findOne({_id:todoID})
        if(updateTodoData.acknowledged){
            res.status(200).json({
                data: getData,
                message:"Data Updated Successfully"
            })
        }else{
            res.status(400).json({
                message:"Cannot Update Data"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: `Server Error: ${error.message}`
        })
    }
}

