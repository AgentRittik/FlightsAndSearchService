const { FlightService } = require('../services/index');


const flightService = new FlightService();

const create = async(req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            sucess: true,
            err: {},
            message: 'Sucessfully created the flight'
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to create the flight',
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            sucess: true,
            err: {},
            message: 'Sucessfully fetched the flights'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to FETCH the flights',
            err: error
        });
    }
}





module.exports = {
    create,
    getAll
}