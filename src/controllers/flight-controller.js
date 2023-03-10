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





module.exports = {
    create
}