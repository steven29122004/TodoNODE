let todoList = [];

const TodoEntity = require('../model/todo.model');
const ResponseType = require('../dto/response.type')
exports.getPage = async (req, res) => {
    const todo = await TodoEntity.find();
    res.render('index', { todoList: todo })
};
exports.postInput = async (req, res) => {
    try {
        const { body: { name } } = req;
        const postStuff = new TodoEntity({ name });
        await postStuff.save();
        res.json(new ResponseType(true).success())
    } catch (error) {
        console.log(`error ${error}`)
        res.json(new ResponseType(false).error())
    }
}

exports.editInput = async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const editTodo = await TodoEntity.findByIdAndUpdate(id, {
            name: body.name
        })
        if (!editTodo) {
            res.json(new ResponseType(null).error())
        }
        res.json(new ResponseType(editTodo).success())
    } catch (error) {
        res.json(new ResponseType(null).error())
    }
}


exports.getTodoListInfo = async (req, res) => {
    const { id } = req.params;
    const detailTodo = await TodoEntity.findById(id)
    res.render('TodoListInfo', { detailTodo })
}

exports.getInputAPI = (req, res) => {
    const { id } = req.params;
    const TodoListInfo = todoList.find(item => item.id == id);
    res.json(TodoListInfo)

}


exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStuff = await TodoEntity.findByIdAndDelete(id);
        if (!deleteStuff) {
            res.json(new ResponseType(false).error())
        }
        res.json(new ResponseType(true).success())
    } catch (error) {
        res.json(new ResponseType(false).error())
    }

}
