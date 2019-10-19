'use strict'
const conexion = require('../config/configdb');

function getEmpresas(req, res) {
    conexion.query('select cif from empresas', function (err, rows) {
        console.log(rows);
        res.send(rows);
    })
}

function saveEmpresa(req, res) {
    let cif = req.body.cif;
    let cif_existe = 0;

    if ((cif == null) || (cif == "")) return res.status(500).send({ message: `Error, el cif no puede estar en blanco` });

    conexion.query('SELECT COUNT(CIF) as NUM_CIF FROM EMPRESAS WHERE CIF = ?', cif, function (err, rows) {
        if (err) return res.status(500).send({ message: `Error, no se ha podido realizar la consulta: ${err}` });
        cif_existe = rows[0].NUM_CIF;

        if (cif_existe > 0) {
            return res.status(500).send({ message: `Error, el cif ya existe` })

        } else {
            conexion.query('insert into empresas(empresas.CIF) VALUES (?)', cif, function (err, success) {
                if (err) return res.status(500).send({ message: `Error no se ha podido salvar la empresa: ${err}` })
                res.status(200).send({ message: success });
            })
        }
    })
}
module.exports = {
    getEmpresas,
    saveEmpresa
}