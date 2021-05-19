var express = require('express');
var router = express.Router();
var controller = require('../controllers');
var auth = require("../auth/auth.js");

//RUTAS SIN TOKEN

router.post('/verificarUsuario', controller.participante.iniciarSesion);
router.post('/gestionCursos', controller.cursos.gestionCursos);
router.post('/gestionInstituto', controller.institutos.gestionInstituto);
router.post('/gestionParticipante', controller.participante.gestionParticipante);
router.post('/gestionPostulacion', controller.postulacion.gestionPostulacion);

router.get('/listarCursos', controller.cursos.listarCursos);
router.get('/listarCursosParticipante', controller.cursos.listarCursosParticipante);
router.get('/listarInstitutos', controller.institutos.listarInstitutos);
router.get('/listarCurso', controller.cursos.listarCurso);
router.get('/listarParticipante', controller.participante.listarParticipante);
router.get('/listarPostulaciones', controller.postulacion.listarPostulaciones);
router.get('/listarPostulacionDetalle', controller.postulacion.listarPostulacionDetalle);
router.get('/listarArchivos', controller.participante.listarArchivos);



//RUTAS CON TOKEN

module.exports = router;
