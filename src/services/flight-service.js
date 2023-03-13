const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');
class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){

        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Arrival time should be greater than departure time"};
            } /// also implement for date

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the service layer");
            throw{error};
        }
    }

    async getFlightData(){

    }
}

module.exports = FlightService;


/**
 * {
 * what we get in data
 * 
 * flightNumber: 
 * airplaneId:
 * departureAirportId: 
 * arrivalAirportId:
 * arrivalTime: 
 * departureTime: 
 * price: 
 * totalSeats --> fetch from airplanes only
 *
 * }
 */