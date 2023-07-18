const request = require('supertest');
const app = require('../index');
import db from '../database';

describe('/auth', () => {
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
    const user = {
      email: 'teste@ufla',
      senha: '123',
    };

    const res = await request(app).post(`/user/register`).send(user);

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error', 'Campos faltando');
  });

  it('Deve retornar erro de senha inválida ao fornecer senha incorreta', async () => {
    const user = {
      email: 'victor@ufla',
      senha: 'senha_incorreta',
    };

    const res = await request(app).post('/user/login').send(user);

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Senha incorreta');
  });

  it('Deve retornar erro de usuário não encontrado ao fornecer um email não registrado', async () => {
    const user = {
      email: 'email_nao_registrado',
      senha: '123',
    };

    const res = await request(app).post('/user/login').send(user);

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Usuário não encontrado');
  });

});

afterAll(() => {
  db.exec('DROP TABLE usuarios;');
  db.close();
});
