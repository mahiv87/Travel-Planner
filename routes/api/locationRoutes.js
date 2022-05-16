const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  // find all locations
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData)
  } catch (error) {
    res.status(500).json(error)
  }
});


// GET a single location
router.get('/:id', async (req, res) => {
  //find all location by PK ID and include 
  // Traveeler through trip as location_travellers
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
    })

    if (!locationData) {
      res.status(404).json({message: 'No location found with this id'});
      return;
    }

    res.status(200).json(locationData)
  } catch (error) {
    res.status(500).json(error)
  }
});

// CREATE a location
router.post('/', async (req, res) => {
  // create a new location
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData)
  } catch (error) {
    res.status(500).json(error)
  }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  // destroy a single location by id
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!locationData) {
      res.status(404).json({message: 'No location found with this id'});
      return;
    }

    res.status(200).json(locationData)
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;