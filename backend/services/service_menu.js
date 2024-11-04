const Menu = require("../models/Menu");

exports.getAll = async () => {
    let itens = await Menu.findAll(); 
    return itens;
};

exports.create = async (item) => {
    let newItem = await Menu.create({
        nome: item.newName,
        descricao: item.newDescricao,
        preco: item.newPreco,
        categoria: item.newCategoria,
        tempo_preparo: item.newTempoPreparo,
        tamanho: item.newTamanho,
        img: item.newImg
    });

    return newItem;
};

exports.getById = async (id) => {
    let item = await Menu.findOne(id); 
    return item;
};

exports.alterItem = async (id, newItem) => {
    await Menu.update(
        {
            nome: newItem.newName,
            descricao: newItem.newDescricao,
            preco: newItem.newPreco,
            categoria: newItem.newCategoria
        },
        {
            where:{
                id: id
            }
        }
    );

    let item = await Menu.findOne(id); 
    return item;
};

exports.deleteById = async (id) => {
    await Menu.destroy({
        where: {
            id: id
        }
    });
};

exports.getAllByCategory = async (category) =>{
    let items = Menu.findAll({
        where: {
            categoria: category
        }
    });
    return items;
};