/// exportamos nuestro modelo
const Mascotas = require('../models/Mascotas');

// Funcion para buscar mascotas que esten en la base de datos
exports.buscarMascotas = async(req,res) => {
    try{
        const mascotas = await Mascotas.find();
        res.json(mascotas)

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar clientes');
    }
}

// mostrar una sola mascota

exports.buscarMascota = async (req, res) => {
    try {
        let mascota = await Mascotas.findById(req.params.id);
        if (!mascota) {
            res.status(404).send({ msg: "no se encuentra el mascota con ese ID" });
            return
        }
        res.json(mascota);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un mascota :(');
    }
}


/// funcion agregar clientes
exports.agregarMascotas = async (req, res) => {

    try {
        let mascota = new Mascotas(req.body)
        await mascota.save();
        res.send(mascota);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar una mascota')
    }
}

// Funcion para actualizar una mascota

exports.modificarMascotas = async (req, res) => {
    try {
        let mascota = await Mascotas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!mascota) {
            return res.status(404).send({msn:'mascota no existente'});

        }

        res.json({ msg: "La mascota fue modificada" });

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar mascota');
    }
}



//  funcion para elimanar mascotas 

exports.eliminarMascotas = async (req, res) => {
    try {
        let mascotas = await Mascotas.findById(req.params.id);
        if (!mascotas) {
            res.status(404).json({ msg: "el cliente no existe" });
            return
        }
        await Mascotas.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El cliente fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al elimina un cliente en la BD');
    }
}
