let mocking = false;

module.exports = {
    getServiceType: () => {
        if (mocking) {
            return 'mock';
        } else {
            return 'mongodb';
        }
    }
};