const request = require('supertest');
const app = require('../index');
import db from '../database';

describe('/auth', () => {
  beforeAll(() => {
    // Limpa a tabela de usuários antes de cada teste
    db.exec('DELETE FROM usuarios;');
  });

  it('Deve cadastrar um usuário ao enviar todos os campos necessários', async () => {
    const user = {
      nome: 'victor',
      email: 'victor@ufla',
      senha: '123',
    };

    const res = await request(app).post('/user/register').send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });

  it('Deve retornar um erro ao tentar cadastrar um usuário sem enviar todos os campos necessários', async () => {
    // Implementar
  });

  it('Deve retornar erro de senha inválida ao fornecer uma senha incorreta', async () => {
    // Implementar
  });

  it('Deve retornar erro de usuário não encontrado ao fornecer um email não registrado', async () => {
    // Implementar
  });
});

afterAll(() => {
  // Fecha a conexão com o banco de dados
  db.close();
});
