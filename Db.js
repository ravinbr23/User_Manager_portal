const mongoos = require ('mongoose');

const ConnectDb = async ()=> {

    try {

        await mongoos.connect(process.env.MONGO_URL);
        console.log ("Mongo DB is connected successfully");
    }

    catch (error){
        console.error (" DataBase Connection Error :",error.message);
    }
};
 
module.exports =ConnectDb;