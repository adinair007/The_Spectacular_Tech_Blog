const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'Sal',
    email: 'sal@hotmail.com',
    password: bcrypt.hashSync('password12345', 8),
  },
  {
    username: 'Lernantino',
    email: 'lernantino@gmail.com',
    password: bcrypt.hashSync('password12345', 8),
  },
  {
    username: 'Amiko',
    email: 'amiko2k20@aol.com',
    password: bcrypt.hashSync('password12345', 8),
  },
];

const seedUsers = async () =>
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
