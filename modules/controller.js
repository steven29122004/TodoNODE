let TodoList = [
    {
        id: 1,
        name: 'Steven',

    },
    {
        id: 2,
        name: 'Scarlett',

    }
]

exports.getPage = (req, res) => {
    res.render('index', { TodoList })
};

exports.postInput = (req, res) => {
    try {
        const { body } = req;
        TodoList.push({
            id: Number(Math.random()),
            ...body,
        })
        res.json(200)
    } catch (error) {
        res.json(404)
    }
}

exports.getTodoListInfo = (req, res) => {
    const { id } = req.params;
    const TodoListInfo = TodoList.find(item => item.id == id);
    res.render('TodoListInfo', { TodoListInfo })
}

exports.delete = (req, res) => {
    const { id } = req.params;
    const index = TodoList.findIndex(item => item.id == id);
    TodoList.splice(index, 1);
    res.json(200);
}