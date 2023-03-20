const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // if any of the above is not present
        return res.status(400).json({
            data: {},
            sucess: false,
            message: 'Invalid request body for creating flight',
            err: "Missing mandatory properties to create flight"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}