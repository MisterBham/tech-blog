const Member = require('./Member');
const Chirp = require('./Chirp');
const Comment = require('./Comment');

Member.hasMany(Chirp, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE',
});

Chirp.belongsTo(Member, {
    foreignKey: 'member_id',
});

Chirp.hasMany(Comment, {
    foreignKey: 'chirp_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Chirp, {
    foreignKey: 'chirp_id',
});

Member.hasMany(Comment, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Member, {
    foreignKey: 'member_id',
});

module.exports = { Member, Chirp, Comment };
