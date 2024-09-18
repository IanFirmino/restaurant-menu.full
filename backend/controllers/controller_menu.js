const ServiceMenu = require("../services/service_menu");

exports.renderInicio = (req, res) => {
    res.render('inicio');
};

exports.renderMenu = async (req, res) => {
    let itens = await ServiceMenu.getAll();
    res.render('menu', {itens: itens});
};

exports.renderNew = (req, res) => {
    res.render('new');
};

exports.menuByCategory = async (req, res) =>{
    let category = req.params.category || 'Entrada';
    let itens = await ServiceMenu.getAllByCategory(category);
    res.render('menu', { itens: itens, category });
};

exports.createItem = async (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let categoria = req.body.categoria;

    let newItem = await ServiceMenu.create({
        newName: nome,
        newDescricao: descricao,
        newPreco: preco,
        newCategoria: categoria
    });

    res.render('new');
};

exports.getAll = async (req, res) => {
    let items = await ServiceMenu.getAll();
    res.status(200).json({
        status: 'success',
        data: items
    });
};

exports.getById = async (req, res) => {
    let id = req.params.id;
    let item = await ServiceMenu.getById(id);
    res.status(200).json({
        status: 'success',
        data: item
    });
};

exports.getByCategory = async (req, res) => {
    let category = req.params.category;
    let itens = await ServiceMenu.getAllByCategory(category);
    res.status(200).json({
        status: 'success',
        data: itens
    })
};

exports.deleteById = async (req, res) => {
    let id = req.body.id;
    await ServiceMenu.deleteById(id);
    res.status(204);
};