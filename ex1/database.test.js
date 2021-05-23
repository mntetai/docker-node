const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create user', async () => {
    expect.assertions(1);
    const user = await db.Users.create({
        Id: 1,
        Name: 'Bobbie',
        Email: 'Bobbie@ex.com',
        Password : '123456'
    });
    expect(user.id).toEqual(1);
});

test('get user', async () => {
    expect.assertions(3);
    const user = await db.Users.findByPk(1);
    expect(user.Name).toEqual('Bobbie');
    expect(user.Email).toEqual('Bobbie@ex.com');
    expect(user.Password).toEqual('123456');
});

test('delete user', async () => {
    expect.assertions(1);
    await db.Users.destroy({
        where: {
            id: 1
        }
    });
    const user = await db.Users.findByPk(1);
    expect(user).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});