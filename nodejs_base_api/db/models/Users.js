const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Email: String,
    password: String,
    is_active: Boolean,
    first_name: String,
    last_name: String,
    phone_number: String
},{
    // timestamps: true olarak da tanımlanabilir createdAt yerine "created_at" olarak 
    // kaydolsun diye böyle yaptık(diğer tanımlamalar ile benzer olsun).
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})