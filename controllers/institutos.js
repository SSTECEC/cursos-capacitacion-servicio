var mysql = require("mysql");
var config = require("../database/database.js");

let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {


  gestionInstituto: function (req, res, next) {
 pool.query('SELECT gestion_instituto(?,?,?,?,?) AS res',
      [
        req.body.identificador,
        req.body.idInstituto,
        req.body.nombre,
        req.body.imagen,
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

  listarInstitutos: function (req, res, next) {
    
    pool.query('SELECT * FROM instituto WHERE estado = 1', function (err, rows, fields) {
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
