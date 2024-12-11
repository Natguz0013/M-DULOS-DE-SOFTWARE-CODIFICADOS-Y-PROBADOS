const Empleado = require('../models/Empleado');

// Crear un nuevo empleado
exports.createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, identificacion, cargo, salario, sucursal } = req.body;

    // Validaciones básicas
    if (!nombre || !apellido || !identificacion || !cargo || !salario || !sucursal) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const nuevoEmpleado = new Empleado({ nombre, apellido, identificacion, cargo, salario, sucursal });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    if (error.code === 11000) {
      // Manejo de clave duplicada
      return res.status(400).json({ message: 'La identificación ya existe', error: error.message });
    }
    res.status(500).json({ message: 'Error al crear el empleado', error: error.message });
  }
};




// Obtener todos los empleados
exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener empleado por ID
exports.getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un empleado
exports.updateEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un empleado
exports.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json({ message: 'Empleado eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
