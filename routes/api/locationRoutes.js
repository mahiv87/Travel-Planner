const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  // find all locations
});


// GET a single location
router.get('/:id', async (req, res) => {
  //find all location by PK ID and include 
  // Traveeler through trip as location_travellers
});

// CREATE a location
router.post('/', async (req, res) => {
  // create a new location
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  // destroy a single location by id
});

module.exports = router;