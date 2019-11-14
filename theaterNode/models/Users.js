const Sequelize = require("sequelize");
const sequelize = require("../helpers/sequelize");
// const Films = require('./Films');

class Users extends Sequelize.Model {
}

Users.init({
    id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Invalid Email"
            }
        }
    },

    row: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "Invalid First Row"
            },
        }
    },

    col: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "Invalid First Col"
            }
        }
    }


}, {
    sequelize,
    modelName: 'users',
    timestamps: false,
});

// Users.belongsTo(Films, {
//     foreignKey: 'film_id',
//     onDelete: 'cascade',
//     onUpdate: 'cascade'
// });

Users.sync();

module.exports = Users;
