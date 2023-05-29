const sequelize = require('../config/connection');
const seedMembers = require('./memberData');
const seedChirps = require('./chirpData');
const seedComments = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMembers();
    console.log('---------- \n MEMBERS seeded... \n ----------');
  await seedChirps();
    console.log('---------- \n CHIRPS seeded... \n ----------');
  await seedComments();
  console.log('---------- \n COMMENTS seeded... \n ----------');

  process.exit(0);
};

seedAll();