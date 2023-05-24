const sequelize = require('../config/connection');
const seedMembers = require('./memberData');
const seedChirps = require('./chirpData');
const seedComments = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMembers();
  await seedChirps();
  await seedComments();

  process.exit(0);
};

seedAll();