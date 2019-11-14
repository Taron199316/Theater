const express = require('express');
const Users = require('../models/Users');

const router = express.Router();


router.get('/:filmId', async (req, res, next) => {
    try {
        const {filmId} = req.params;
        const users = await Users.findAll({
            where: {film_id: filmId}
        });
        res.json({
            status: 'ok',
            users,
        });
    } catch (e) {
        next(e)
    }
});

router.put('/', async (req, res, next) => {
    try {
        const {film_id, email, row, col} = req.body;
        const user = await Users.create({
            film_id, email, row, col
        });
        res.json({
            status: 'Ok',
            user
        })
    } catch (e) {
        next(e)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {film_id, email, row, col} = req.body;
        let user = await Users.update({
            film_id, email, row, col
        }, {
            where: {film_id}
        });
        res.json({
            status: 'Ok',
            user
        })
    } catch (e) {
        next(e)
    }
});

router.delete('/', async (req, res, next) => {
    try {
        const {id} = req.body;
        await Users.destroy({
            where: {id}
        });
        res.json({
            status: "Ok",
        })
    } catch (e) {
        next(e)
    }
});


module.exports = router;


