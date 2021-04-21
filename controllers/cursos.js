var mysql = require("mysql");
var config = require("../database/database.js");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  gestionCursos: function (req, res, next) {
    pool.query('SELECT gestion_cursos(?,?,?,?,?,?,?,?,?) AS res',
      [
        req.body.identificador,
        req.body.idCursos,
        req.body.nombre,
        req.body.descripcion_corta,
        req.body.descripcion_larga,
        req.body.icono,
        req.body.imagen,
        req.body.estado,
        req.body.idInstituto
      ], function (err, rows, fields) {
        if (err) {
          console.log(err);
          res.status(200).send({ 'estado': 0, 'resultado': err });
        } else {
          var result = rows[0].res;
          res.status(200).send({ 'estado': 1, 'resultado': result });
        }
      });
    //pool.end();
  },

  listarCursos: function (req, res, next) {

    pool.query('SELECT * FROM cursos WHERE estado = 1', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(200).send({ 'estado': 0, 'resultado': err });
      } else {
        var resultado = rows;
        res.status(200).send({ 'estado': 1, 'resultado': resultado });
      }
    });

  },

  listarCurso: function (req, res, next) {

    pool.query('SELECT * FROM cursos WHERE idCursos = ?', [req.query.idCursos], function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(200).send({ 'estado': 0, 'resultado': err });
      } else {
        var resultado = rows[0];
        res.status(200).send({ 'estado': 1, 'resultado': resultado });
      }
    });

  },


}
