const { Member } = require('../models');

const memberData = [
    {"username":"Frank Redfin","email":"frankredfin@redfin.com","password":"Rt7@nk23fg"},
    {"username":"Laura Redfin","email":"lauraredfin@redfin.com","password":"Y8adsf&$ad"},
    {"username": "admin", "email":"admin@admin.net", "password":"P@ssw0rd"}
]

const seedMembers = () => Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedMembers;