let student = [
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
    res.render('index', { student })
};

exports.postInput = (req, res) => {
    try {
        const { body } = req;
        student.push({
            id: Number(Math.random()),
            ...body,
        })
        res.json(200)
    } catch (error) {
        res.json(404)
    }
}

exports.getStudentInfo = (req, res) => {
    const { id } = req.params;
    const studentInfo = student.find(item => item.id == id);
    res.render('studentInfo', { studentInfo })
}

exports.delete = (req, res) => {
    const { id } = req.params;
    const index = student.findIndex(item => item.id == id);
    student.splice(index, 1);
    res.json(200);
}