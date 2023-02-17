const { CityService } = require('../services/index');

const cityService = new CityService(); // in order to use the city service we have to create the object


/**
 * 
 * Post
 * data -> req.body
 */

const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: 'Sucessfully created the city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to create the city',
            err: error
        });
    }

}

// Delete ->  /city/:id
const destroy = async (req, res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Sucessfully deleted the city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to delete the city',
            err: error
        });
    }
    
}

// GET -> /city/:id
const get = async (req, res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Sucessfully fetched the city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to get the city',
            err: error
        });
    }
}

// patch -> /city/:id -> data -> req.body

const update = async (req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Sucessfully updated the city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to update the city',
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}