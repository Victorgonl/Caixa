const request = require('supertest');
const app = require('../index');
import Usuario from '../app/schemes/Usuario';

describe('/auth', () => {
  it('Deve cadastrar um usuario ao enviar todos campos necessários', async () => {
    const user = {
      nome: 'victor',
      email: 'victor@ufla',
      senha: '123',
    };

    const res = await request(app).post(`/user/register`).send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });

  it('Deve retornar um erro ao tentar cadastrar um usuario sem enviar todos campos necessários', async () => {
    //Implementar
  });

  it('Deve retornar erro de senha inválida ao fornecer senha incorreta', async () => {
    //Implementar
  });

  it('Deve retornar erro de usuário não encontrado ao fornecer um email não registrado', async () => {
    //Implementar
  });
});

afterAll(async () => {
  try {
    await Usuario.deleteMany({});

    console.log('Coleção de usuarios dropada com sucesso.');
  } catch (error) {
    console.error('Erro ao dropar a coleção de usuarios:', error);
  }
});
