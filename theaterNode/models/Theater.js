const Sequelize = require("sequelize");
const sequelize = require("../helpers/sequelize");

class Theater extends Sequelize.Model {}

Theater.init({

    id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "Invalid First Name"
            }
        }
    },

    rows: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "Invalid First Row"
            },
        }
    },

    cols: {
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
    modelName: 'theater',
    timestamps: false,
});

Theater.sync();

module.exports = Theater;
