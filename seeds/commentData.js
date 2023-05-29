const { Comment } = require('../models');

const commentData = [
    {"contents": "Just thissssssss.........", "chirp_id": 1, "member_id": 1},
    {"contents": "Is what you put in on the right, down here?", "chirp_id": 1, "member_id": 2},
    {"contents": "You are better than 77% of everyone", "chirp_id": 2, "member_id": 1},
    {"contents": "It's already in there", "chirp_id": 2, "member_id": 2},
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;