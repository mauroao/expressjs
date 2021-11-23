import { fakeService } from './mock.service.js';
// import {} from './mongodb.service';

const use_mongo = process.env.USE_MONGO;

export function getService() {
  if (use_mongo) {
    return fakeService; // ToDo: refactor mongo service ...
  } else {
    return fakeService;
  }
}
