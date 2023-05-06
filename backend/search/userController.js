var userService = require('./userService');

var findOneUserController = async (req, res) =>
{
    console.log(req.params.name );
    var result = await userService.findOneUserDBService(req.params.name );

    if (result) {
        res.send({ "status": true, "data": result} );
    } else {
        res.send({ "status": false, "data": "User not found" });
    }
}

module.exports = { findOneUserController};