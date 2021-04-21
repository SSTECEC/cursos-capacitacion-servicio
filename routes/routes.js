var express = require('express');
var router = express.Router();
var controller = require('../controllers');
var auth = require("../auth/auth.js");

//RUTAS SIN TOKEN

router.post('/verificarUsuario', controller.participante.iniciarSesion);
router.post('/gestionCursos', controller.cursos.gestionCursos);
router.post('/gestionInstituto', controller.institutos.gestionInstituto);
router.post('/gestionParticipante', controller.participante.gestionParticipante);





router.get('/listarCursos', controller.cursos.listarCursos);
router.get('/listarInstitutos', controller.institutos.listarInstitutos);
router.get('/listarCurso', controller.cursos.listarCurso);
router.get('/listarParticipante', controller.participante.listarParticipante);


//RUTAS CON TOKEN

module.exports = router;
