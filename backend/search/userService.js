var userModel = require('../models/User');

module.exports.findOneUserDBService = (userDetais) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findOne({username:userDetais}, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });

    });

 }