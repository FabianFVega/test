
const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET
router.get('/saludo', (req, res) => {
  res.send('¡Hola desde la ruta de API!');
});

module.exports = router;
