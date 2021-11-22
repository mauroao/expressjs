let mocking = true;

module.exports = {
  getServiceType: () => {
    if (mocking) {
      return 'mock';
    } else {
      return 'mongodb';
    }
  }
};
