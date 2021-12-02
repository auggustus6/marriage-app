import { appSchema } from '@nozbe/watermelondb';

import { marriageSchema } from './MarriageSchema';
import { userSchema } from './UserSchema';

const schemas = appSchema({
    version: 4,
    tables: [
        marriageSchema,
        userSchema
    ]
})

export { schemas }