import { getService } from '../../services/service.factory';

const service = getService();

export const homeController = {
  getServiceDescription: function () {
    return service.getServiceDescription();
  }
};
