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

exports.editInput = (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const index = TodoList.findIndex(item => item.id == id)
        TodoList[index].name = body.name;
        res.json(200);
    } catch (error) {
        res.json(404)
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

exports.edit = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const index = todoList.findIndex(item => item.id == item);
    todoList[index].name = body.name;
    res.json(200)
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
