const { Chirp } = require('../models');

const chirpData = [
    {"title": "First Chirp!!!", "contents": "Hahahaha, I was able to get the first chirp on the entire site!", "member_id": 1},
    {"title": "I got the 2nd!", "contents": "I got the 2nd chirp ever recorded!", "member_id": 2},
    {"title": "Were giving it the datatype of an array", "contents": "It should know better", "member_id": 1},
    {"title": "It's just hard man", "contents": "It could never be true", "member_id": 2},
]

const seedChirps = () => Chirp.bulkCreate(chirpData);

module.exports = seedChirps;
