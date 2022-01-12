import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {schemas} from './schema';
import {Marriage} from './model/Marriage';
import { User } from './model/User';

const watermelonAdapter = SQLiteAdapter;
const adapter = new watermelonAdapter({
  schema: schemas,
});

export const database = new Database({
    adapter,
    modelClasses: [Marriage, User],
});




