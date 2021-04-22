var mysql = require("mysql");
var config = require("../database/database.js");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  iniciarSesion: function (req, res, next) {
    
    pool.query('SELECT * FROM participante WHERE estadoP = 1 and correoP = ? and identificacionP = ?', [req.body.email, req.body.password ], function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(200).send({ 'estado': 0, 'resultado': err });
      } else {
        var resultado = rows;
        res.status(200).send({ 'estado': 1, 'resultado': resultado });
      }
    });

  },

  
  gestionParticipante: function (req, res, next) {
 pool.query('SELECT gestion_participante(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) AS res',
      [
        req.body.identificador,
        req.body.idParticipante,
        req.body.nombreP,
        req.body.identificacionP,
        req.body.correoP,
        req.body.direccionP,
        req.body.paisP,
        req.body.ciudadP,
        req.body.provinciaP,
        req.body.estadoCivilP,
        req.body.fechaNac,
        req.body.nombreRefeP,
        req.body.correoRefeP,
        req.body.contactoP,
        req.body.parentescoP,
        req.body.nombreRefeL,
        req.body.correoRefeL,
        req.body.contactoL,
        req.body.parentescoL,
        req.body.estadoP,
        req.body.idCurso
      ], function (err, rows, fields) {
        if (err) {
          console.log(err);
          res.status(200).send({ 'estado': 0, 'resultado': err });
        } else {
          var result = rows[0].res;
          res.status(200).send({ 'estado': 1, 'resultado': result });
        }
      });
 
  },

  listarParticipante: function (req, res, next) {
    
    pool.query('SELECT * FROM participante WHERE estadoP = 1', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(200).send({ 'estado': 0, 'resultado': err });
      } else {
        var resultado = rows;
        res.status(200).send({ 'estado': 1, 'resultado': resultado });
      }
    });

  },




}
