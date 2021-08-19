const { request, response } = require("express");
const pool = require("../db/conexion");
const usuariosQueries = require("../models/usuarios");

const usuariosGet = async (req = request, res = response) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const usuarios = await conn.query(usuariosQueries.selectUsuarios);

    res.json({usuarios});
  } catch(error){
      console.log(error);
      res.status(500).json({msg:"Por favor contacte al administrador",error});
    } finally{
      if (conn) conn.end();
    }
 
  
  //res.json({ msg: "Hola a todos desde GET" });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, apellido, email, edad = 0 } = req.body;
  res.status(201).json({ msg: "Hola a todos desde POST", edad });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;
  res.status(400).json({ msg: "Hola a todos desde PUT", id });
};

const usuariosDelete = (req = request, res = response) => {
  const { usuario, password } = req.query;
  res.status(500).json({ msg: "Hola a todos desde DELETE", usuario, password });
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };
