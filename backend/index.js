const express = require('express');
const path = require('path');
const app = express();
const sequelize = require('./config/database');
const port = 3000;
const menuRouter = express.Router();
const MenuController = require('./controllers/controller_menu')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('frontend'));
app.use('/', menuRouter);

menuRouter.route('/')
    .get(MenuController.renderInicio);

menuRouter.route('/menu')
    .get(MenuController.renderMenu);

menuRouter.route('/new')
    .get(MenuController.renderNew);

menuRouter.route('/menu/:category')
    .get(MenuController.menuByCategory);

menuRouter.route('/api/menu')
    .get(MenuController.getAll)
    .post(MenuController.createItem);

menuRouter.route('/api/menu/:id')
    .get(MenuController.getById)
    .delete(MenuController.deleteById);
    
menuRouter.route('/api/menu/:category')
    .get(MenuController.getByCategory);

(async () => {
    try {
      await sequelize.sync(); 
      console.log('Database sincronizado corretamente');
  
      app.listen(port, () => {
        console.log(`Server rodando em http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Falha ao sincronizar no banco:', error);
      process.exit(1);
    }
})();