//Yixuan Wang 

const mongoCollections = require('../config/mongoCollections')
const rental = mongoCollections.rental
// const users = require('./users')
const shareUtilsDB = require("./shareUtilsDB");

const ExportedMethods = {

    //create

    async createRental(location, price, bedroom, bathroom, space, description, photos, utility, like, dislike, labels, contact) {
        //check errors will be finished later 
        // use function on verify.js

        const rentalCollection = await rental()

        const newRental = {
            location: location, 
            price: price, 
            bedroom: bedroom, 
            bathroom: bathroom, 
            space: space, 
            description: description , 
            photos: photos, 
            utility: utility, 
            like: like, 
            dislike: dislike, 
            labels: labels, 
            contact: contact,
            _id: uuid.v4()
        }
        const insertInfo = await rentalCollection.insertOne(newRental)
        if (insertInfo.insertedCount === 0) throw 'Could not add a rental post';
        const newId = insertInfo.insertedId
        // await shareUtilsDB.toggleRentalToUser(userId, newId) // you may need to think where to get userId
        return await this.getRentalById(newId)
    },


    //Read ('get all', 'get by id')

    async getAllRental(){
        const rentalCollection = await rental()
        const rentalList = await rentalCollection.find({}).toArray()
        if(!rentalList) throw 'Error: no rental in the system'
        return rentalList
    },

    async getRentalById(id){
        if (!id) throw 'Error: You must provide an id to search for'
        if (typeof id !== 'string' || id.trim().length == 0) throw 'Error: You must provide a valid id'
        const rentalCollection = await rental()
        const thisRental = await rentalCollection.findOne({ _id: id})
        if (!thisRental) throw 'Error: Rental not found'
        return thisRental
    },


    //Delete
    async deleteRental(id) {
        const rentalCollection = await rental()
        const deleteInfo = await rentalCollection.removeOne({ _id: id})
        if (deleteInfo.deletedCount === 0) {
            throw `Could not delete rentalwith id of ${id}`;
        }
        // await shareUtilsDB.untoggleRentalToUser(userId, newId)
        return true
    }

 	//////////////////////////////////////////////////////////////////
	// Update refer ./data/user.js
    // toggle refer ./data/verify.js
	//////////////////////////////////////////////////////////////////

}


module.exports = ExportedMethods

// Finished by Yixuan Wang on April 18, 2021



