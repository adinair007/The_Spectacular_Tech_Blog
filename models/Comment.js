const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },

        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id",
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "comment"
    },
);

module.exports = Comment;
