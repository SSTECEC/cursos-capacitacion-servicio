var mysql = require("mysql");
var config = require("../database/database.js");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  gestionArchivo: function (req, res, next) {
    pool.query('SELECT gesstion_archivo(?,?,?,?,?,?) AS res',
      [
        req.body.identificador,
        req.body.idArchivo,
        req.body.nombre,
        req.body.documento,
        req.body.tipo,
        req.body.idParticipante
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

  listarArchivosPostulaciones: function (req, res, next) {
    
    pool.query('SELECT * FROM archivo WHERE idParticipante = ?',[req.query.idParticipante], function (err, rows, fields) {
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
