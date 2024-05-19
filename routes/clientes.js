const express = require ('express');
const router = express.Router();
const ClienteController = require ('../controllers/clienteController');


router.post('/',ClienteController.agregarClientes);
router.get('/',ClienteController.buscarClientes);
router.get('/:id',ClienteController.buscarCliente);
router.delete('/:id',ClienteController.eliminarClientes);
router.put('/:id',ClienteController.modificarCliente);
//router.put('/:id',ClienteController.actualizarClientes);
//router.patch('/:id', ClienteController.modificarCliente);


module.exports = router;

