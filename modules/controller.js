let product = [
    {
        id: 1,
        name: 'Steven',

    }
]

exports.getPage = (req, res) => {
    res.render('index', { product })
};

exports.postInput = (req, res) => {
    const { body } = req;
    product.push({
        id: Number(Math.random()),
        ...body
    })
    res.json(200)
}