const express = require( "express");
const router = express.Router();
const { check } = require ("express-validator");
const authController = require ("../controllers/authController");
const auth = require ("../middleware/auth");

//autenticar un usuario ---// api/aut

router.post(
    "/", [ 
        check("email", "digite un email valido").isEmail(),
        check("password", "el password debe tener minimo 8 caracteres").isLength({
            min: 8,
        }),  
    ],
authController.autenticarusuario
);

router.get("/",auth , authController.autenticarusuario);


module.exports = router;