import { fakeService } from './fake/fake.service.js';
import { connectToMongoDb } from './mongodb/mongodb.helpers';
import { mongoDbService } from './mongodb/mongodb.service';

const use_mongo = process.env.USE_MONGO;

export function getService() {
  if (use_mongo) {
    connectToMongoDb();
    return mongoDbService;
  }
  return fakeService;
}
