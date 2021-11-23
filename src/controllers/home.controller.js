import { getService } from '../services/service.factory.js';

const service = getService();

export const homeController = {
  getServiceDescription: function () {
    return service.getServiceDescription();
  }
};
