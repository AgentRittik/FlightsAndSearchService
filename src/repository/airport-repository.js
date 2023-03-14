const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

// using inheritance
class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository; 