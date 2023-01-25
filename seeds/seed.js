const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedDatabase = async () => {
    console.log("--------SYNCING DATABASE--------");
    await sequelize.sync({ force: true });
    console.log("--------DATABASE SYNCED---------");

    console.log("--------SEEDING USERS--------");
    await seedUsers();
    console.log("--------USERS SEEDED---------");

    console.log("--------SEEDING POSTS--------");
    await seedPosts();
    console.log("--------POSTS SEEDED---------");

    console.log("--------SEEDING COMMENTS--------");
    await seedComments();
    console.log("--------COMMENTS SEEDED---------");

    process.exit(0);
};

seedDatabase();