const { Model, DataTypes } = require('sequelize'); 

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            lastname: DataTypes.STRING,
            age: DataTypes.STRING,
            adress: DataTypes.STRING,
            email: DataTypes.STRING,
            ddd: DataTypes.STRING,
            phone: DataTypes.STRING,
            user_name:DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize   
        })
    }
}
module.exports = User;