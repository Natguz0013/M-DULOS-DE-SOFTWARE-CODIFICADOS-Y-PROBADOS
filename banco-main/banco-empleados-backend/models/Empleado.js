const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true }, // Sin tilde
  cargo: { type: String, required: true },
  salario: { type: Number, required: true },
  sucursal: { type: String, required: true },
  fechaIngreso: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
