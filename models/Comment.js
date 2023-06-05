const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        chirp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'chirp',
                key: 'id',
            },
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'member',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
        }
    );
    
    module.exports = Comment;