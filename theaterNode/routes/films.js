const express = require('express');
const Films = require('../models/Films');
const Users = require('../models/Users');

const router = express.Router();

router.get('/film', async (req, res, next) => {
    try {
        const {theatre_id} = req.query;
        const films = await Films.findAll({
            include: [{
                model: Users,
            }],
            where: {
                theatre_id
            }
        });
        res.json({
            status: 'ok',
            films,
        });
    } catch (e) {
        next(e)
    }
});

router.get('/filmtwo', async (req, res, next) => {
    try {
        const films = await Films.findAll({
            include: [{
                model: Users,
            }],
        });
        res.json({
            status: 'ok',
            films,
        });
    } catch (e) {
        next(e)
    }
});

router.put('/film', async (req, res, next) => {
    try {
        const {theatre_id, name, time} = req.body;
        const films = await Films.create({
            name,
            theatre_id,
            time
        });
        res.json({
            status: 'Ok',
            films
        })
    } catch (e) {
        next(e)
    }
});

router.post('/film', async (req, res, next) => {
    try {
        const {name, time, film_id} = req.body;
        let theater = await Films.update({
            name,
            time
        }, {
            where: {id: film_id}
        });

        if (theater[0]) {
            return res.json({
                status: 'Ok',
            })
        } else {
            return res.status(400).json({
                status: 'Error',
            })
        }

    } catch (e) {
        next(e)
    }
});

router.delete('/film', async (req, res, next) => {
    try {
        const {id} = req.body;
        let del_film;
        del_film = await Films.destroy({
            where: {id}
        });
        res.json({
            status: "Ok",
            del_film
        })
    } catch (e) {
        next(e)
    }
});

module.exports = router;
