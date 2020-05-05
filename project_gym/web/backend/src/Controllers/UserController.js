const User = require('../models/Users');

module.exports = {

    async create(req, res){

       const { name, lastname, age, adress, email, ddd, phone, user_name, password} = req.body; 

        const user =  await User.create({
            
            name,
            lastname,
            age,
            adress,
            email,
            ddd,
            phone,
            user_name,
            password         
        });

        return res.json(user);
    }

};