import { Router } from 'express';
import db from '../../database';

const router = new Router();

router.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(500).send({ error: 'Campos faltando' });
  }

  const userExists = db
    .prepare('SELECT * FROM usuarios WHERE email = ?')
    .get(email);

  if (userExists) {
    return res.status(400).send({ error: 'Usuário já existe' });
  }

  const insertUser = db.prepare(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
  );
  const result = insertUser.run(nome, email, senha);

  if (result.changes > 0) {
    return res.send({ user: { id: result.lastInsertRowid, nome, email } });
  } else {
    console.error('Erro ao salvar usuário');
    return res.status(500).send({ error: 'Registro falhou' });
  }
});

router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const user = db.prepare('SELECT * FROM usuarios WHERE email = ?').get(email);

  if (user) {
    if (senha === user.senha) {
      return res.send({ message: 'Sucesso no login' });
    } else {
      return res.status(401).send({ error: 'Senha incorreta' });
    }
  } else {
    return res.status(404).send({ error: 'Usuário não encontrado' });
  }
});

export default router;
