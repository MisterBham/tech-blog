const { Member } = require('../models');

const memberData = [
    {"name":"Nanci Redmond","email":"nredmond0@latimes.com","password":"KGc73FlXTIk"},
    {"name":"Janeen Dorset","email":"jdorset1@wp.com","password":"0Ju7bYqD"},
    {"name":"Carissa Pally","email":"cpally2@de.vu","password":"ga6keA6UY0n"},
    {"name":"Waverly Absolom","email":"wabsolom3@indiegogo.com","password":"5ReiEdn"},
    {"name":"Eamon Dislee","email":"edislee4@soundcloud.com","password":"JlFsu7K09KG"}
]

const seedMembers = () => Member.bulkCreate(memberData);

module.exports = seedMembers;