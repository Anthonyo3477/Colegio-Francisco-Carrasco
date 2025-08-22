const { Router } = require('express');
const routes = Router();

const indexRoutes = require('./apis/home.routes');
const alumnoRoutes = require('./apis/alumno.routes');

// rut_alumnos para la página de inicio
routes.use('/', indexRoutes);
routes.use('/', alumnoRoutes);


module.exports = routes;