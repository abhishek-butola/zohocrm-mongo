
var mongo_util = {};
var model = require('./oauthtokens');

mongo_util.saveOAuthTokens = function(config_obj){
return new Promise(function(resolve,reject){
    mongo_util.deleteOAuthTokens().then(function(){
        model.create(config_obj, (err, oauthtoken) => {
            if (err) throw new Error(err);
            resolve(oauthtoken);
        });
    })
})
}

mongo_util.getOAuthTokens = function(){ 
    return new Promise(function(resolve,reject){
        var crmclient = require('../ZCRMRestClient');
        model.findOne({"user_identifier": crmclient.getUserIdentifier()}, (err, oauthtoken) => {
            if (err) throw new Error(err);
            resolve(oauthtoken);
        });
    });
}

mongo_util.updateOAuthTokens = function(config_obj){
    return new Promise(function(resolve,reject){
    var crmclient = require('../ZCRMRestClient');
    model.updateOne(config_obj, (err, oauthtoken) => {
        if (err) throw new Error(err);
        resolve(oauthtoken);
    });
});
}


mongo_util.deleteOAuthTokens = function(){
    return new Promise(function(resolve,reject){
        var crmclient = require('../ZCRMRestClient');
        model.deleteOne({"user_identifier": crmclient.getUserIdentifier()}, (err, oauthtoken) => {
            if (err) throw new Error(err);
            resolve(oauthtoken);
        });
    })
}

module.exports = mongo_util;