const Sequelize = require("sequelize");
const Theater = require("./Theater");
const Users = require("./Users");
const sequelize = require("../helpers/sequelize");

class Films extends Sequelize.Model {

}

Films.init({
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

    time: {
        type: Sequelize.DATE,
        allowNull: true,
    },

}, {
    sequelize,
    modelName: 'films',
    timestamps: false,
});

Films.belongsTo(Theater, {
    foreignKey: 'theatre_id',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

Films.hasMany(Users, {
    foreignKey: 'film_id',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});


Films.sync();

module.exports = Films;
