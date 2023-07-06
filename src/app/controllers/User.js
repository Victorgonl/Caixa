import { Router } from 'express';
import Usuario from '../schemes/Usuario';

const router = new Router();

router.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  Usuario.findOne({ email })
    .then((userData) => {
      if (userData) {
        return res.status(404).send({ error: 'Usuario já existe' });
      } else {
        Usuario.create({ nome, email, senha })
          .then((user) => {
            return res.send({ user });
          })
          .catch((error) => {
            console.error('Erro ao salvar usuario', error);
            return res.status(400).send({ error: 'Registro falhou' });
          });
      }
    })
    .catch((error) => {
      console.error('Erro ao consultar usuario no banco de dados', error);
      return res.status(500).send({ error: 'Registro falhou' });
    });
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  Usuario.findOne({ email })
    .then((user) => {
      if (user) {
        if (senha === user.senha) {
          return res.send({ message: 'Sucesso no login' });
        } else {
          return res.status(401).send({ error: 'Senha incorreta' });
        }
      } else {
        return res.status(404).send({ error: 'Usuario não encontrado' });
      }
    })
    .catch((error) => {
      console.error('Erro ao logar', error);
      return res.status(500).send({ error: 'Internal server error' });
    });
});

export default router;
