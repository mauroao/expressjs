const config = require('../config/config');
const service = require(`../services/${config.getServiceType()}.service`);

module.exports.getService = () => {
    return service;
};