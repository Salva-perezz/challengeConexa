const User = require('../../../models/user/user');
const response = require('../../../network/response');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if(!username || !password) {
            return response.error(req, res, 'Username and password are required', 400);
        };
        
        const possibleUser = await User.findOne({ where: { username } });

        if(possibleUser) {
            return response.error(req, res, 'Username already exists', 400);
        }

        await User.create({
            username,
            password
        });

        response.success(req, res, 'User created succesfully', 201);
    } catch(e) {
        console.log(e);
        response.error(req, res, null, 500);
    }
}

const logIn = async (req, res) => {

}

module.exports = { createUser, logIn };