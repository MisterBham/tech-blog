const { Member } = require('../models');

const memberData = [
    {"name":"Frank Redfin","email":"frankredfin@redfin.com","password":"Rt7@nk23fg"},
    {"name":"Laura Redfin","email":"lauraredfin@redfin.com","password":"Y8adsf&$ad"},
]

const seedMembers = () => Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedMembers;