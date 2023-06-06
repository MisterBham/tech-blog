const { Member } = require('../models');

const memberData = [
        {"username":"dkinge0","email":"cspurdon0@tripod.com","password":"OAe@9yuZ"},
        {"username":"msandys1","email":"aquaif1@1und1.de","password":"5G#NQWcfs6k"},
        {"username":"tetridge2","email":"bmenendez2@nba.com","password":"3awIX8!vEj"},
        {"username":"cbeswetherick3","email":"lnajera3@over-blog.com","password":"Q6%bypg7"},
        {"username":"edeleon4","email":"msowden4@si.edu","password":"7k^GX5PG"},
]

const seedMembers = () => Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedMembers;