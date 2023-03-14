const { AirportService } = require('../services/index');

const airportService = new AirportService(); // in order to use the airport service we have to create the object

const create = async (req, res) => {
    try{
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: 'Sucessfully created the airport',
            err: {},
            data: response,
            sucess: true
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to create the airport',
            err: error
        });
    }    
}


module.exports = {
    create
}