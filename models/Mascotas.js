const { version } = require("os");

const mongoose = require ('mongoose');

/// este modelo que vamos a hacer debe ser igual a lo que tenga la BD

const mascotasSchemaSchema = mongoose.Schema({


Nombre:{
    type: String,
    require:true
},
Id:{
    type: Number,
    require:true
},
Propietario:{
    type: String,
    require:true
},
Vacunas:{
    type: Number,
    require:true
},
Edad:{
    type: Number,
    require:true
},
},{versionkey: false});

module.exports = mongoose.model('Mascotas', mascotasSchemaSchema)