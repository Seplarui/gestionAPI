'use strict'

const express = require('express');
const holaCtrl = require('../controllers/holaMundo');
const empresaCtrl = require('../controllers/empresa');
const router = express.Router();

//RUTAS
router.get('/hola', holaCtrl.getHolaMundo);
router.get('/api/empresa', empresaCtrl.getEmpresas);
router.post('/api/empresa',empresaCtrl.saveEmpresa);

module.exports = router;