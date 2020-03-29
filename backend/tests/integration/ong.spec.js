const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback(); // para limpar tudo o que ja esta na BD e quando inicia novo teste, limpa primeiro
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    // .set('Authorization', 'ID VALIDO DE UMA ONG')
    .send({
      "name": "Associação Ajuda Animal",
      "email": "ajuda@mail.pt",
      "whatsapp": "+351913548006",
      "city": "Gafanha",
      "uf": "PT"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})