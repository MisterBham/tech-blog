const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
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
            allowNull: false,
            references: {
                model: 'member',
                key: 'id',
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newBlogData) => {
            newBlogData.password = await bcrypt.hash(newBlogData.password, 10);
            return newBlogData;
            },
            beforeUpdate: async (updatedBlogData) => {
            updatedBlogData.password = await bcrypt.hash(updatedBlogData.password, 10);
            return updatedBlogDBlog;
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'chirp',
        }
    );
    
module.exports = Chirp;