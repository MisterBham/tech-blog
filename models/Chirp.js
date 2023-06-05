const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chirp extends Model {}

Chirp.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: '',
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        member_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'member',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'chirp',
        }
    );
    
module.exports = Chirp;