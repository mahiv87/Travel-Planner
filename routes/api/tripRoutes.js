const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const tripData = Trip.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!tripData) {
            res.status(404).json({ message: 'No trip with this id' });
            return;
        }

        res.status(200).json(tripData)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;