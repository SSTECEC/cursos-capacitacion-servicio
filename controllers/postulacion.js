var mysql = require("mysql");
var config = require("../database/database.js");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {


  gestionPostulacion: function (req, res, next) {
 pool.query('SELECT gestion_postulacion(?,?,?) AS res',
      [
        req.body.identificador,
        req.body.idPostulacion,
        req.body.estado,
     
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

  listarPostulaciones: function (req, res, next) {
    
    pool.query('SELECT * FROM listar_postulaciones WHERE estado = ?',[req.query.estado], function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(200).send({ 'estado': 0, 'resultado': err });
      } else {
        var resultado = rows;
        res.status(200).send({ 'estado': 1, 'resultado': resultado });
      }
    });

  },

  listarPostulacionDetalle: function (req, res, next) {
    
    pool.query('SELECT * FROM listar_datos_postulacion WHERE idPostulacion = ?',[req.query.idPostulacion], function (err, rows, fields) {
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
