const axios = require('axios');
const response = require('../../../network/response');

const getPosts = async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
        response.success(req, res, data, 200);
    } catch(e) {
        response.error(req, res, e.message, 500);
    }
}

module.exports = { getPosts };