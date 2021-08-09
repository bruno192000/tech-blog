const { User } = require('../models');

const userData = [{
        username: 'Antonio',
        password: 'Antoniox213'

    },
    {
        username: 'Jimmy',
        password: 'Santoyo213'
    },
    {
        username: 'JW',
        password: 'Batman2000'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;