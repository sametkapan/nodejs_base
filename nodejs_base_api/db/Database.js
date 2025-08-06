const mongoose = require("mongoose");

let instance = null;
class Database {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }

    async connect (options){
        let db = await mongoose.connect(options.CONNECTION_STRING)
    }

}

module.exports = Database;
