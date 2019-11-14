const express = require('express');
const Theater = require('../models/Theater');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const theaters = await Theater.findAll();
        res.json({
            status: 'ok',
            theaters,
        });
    } catch (e) {
        next(e)
    }
});

router.put('/', async (req, res, next) => {
    try {
        const {name, rows, cols} = req.body;
        let theater = await Theater.create({
            name,
            rows,
            cols
        });
        res.json({
            status: 'Ok',
            theater
        })
    } catch (e) {
        next(e)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {id, name, rows, cols} = req.body;
        let theater = await Theater.update({
            name,
            rows,
            cols
        }, {
            where: {id}
        });
        res.json({
            status: 'Ok',
            theater
        })
    } catch (e) {
        next(e)
    }
});

router.delete('/', async (req, res, next) => {
    try {
        const {id} = req.body;
        let del_theater;
        del_theater = await Theater.destroy({
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
