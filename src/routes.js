const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//rotas da API

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

routes.post('/spots', upload.single('thumbnail') ,SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboards', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

 //testes daqui para baixo   
routes.get('/', (req, res) => {
    return res.json({message:"Hello World teste"});
});

routes.get('/users', (req, res) => {
    return res.json({idade: req.query.idade});
});

routes.put('/users/:id', (req, res) => {
    return res.json({id: req.params.id});
});

// routes.post('/teste', (req, res) => {
//     return res.json({message:"Executou o post"});
// });

routes.post('/json', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;