import mongoose from '../../database';

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  senha: { type: String, required: true, select: false },
  dataCriacao: { type: Date, default: Date.now },
  administrador: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Usuario', usuarioSchema);
