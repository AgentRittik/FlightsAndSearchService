const { FlightService } = require('../services/index');

const { SucessCodes } = require('../uitls/error-codes');
const flightService = new FlightService();

const create = async(req, res) => {
    try{
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SucessCodes.CREATED).json({
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
        return res.status(SucessCodes.OK).json({
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