import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { Marriage } from '../model/Marriage';
import { User } from '../model/User';
import { schemas } from '../schema';

const watermelonAdapter = LokiJSAdapter;
const adapter = new watermelonAdapter({
  schema: schemas,
  useWebWorker: false,
  useIncrementalIndexedDB: true,
});

export const database = new Database({
  adapter,
  modelClasses: [Marriage, User],
});


