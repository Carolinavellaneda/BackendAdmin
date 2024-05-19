const express = require ('express');
const router = express.Router();
const MascotasController = require ('../controllers/MascotasController');


router.get('/',MascotasController.buscarMascotas);
router.post('/',MascotasController.agregarMascotas);
router.get('/:id',MascotasController.buscarMascota);
router.put('/:id',MascotasController.modificarMascotas);
router.delete('/:id',MascotasController.eliminarMascotas);


module.exports = router;
