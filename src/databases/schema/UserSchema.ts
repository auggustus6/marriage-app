import { tableSchema } from '@nozbe/watermelondb';

const userSchema = tableSchema({
    name: "user",
    columns: [
        {
            name:'user_id',
            type:'number'
        },
        {
            name:'name',
            type:'string'
        },
        {
            name:'email',
            type:'string'
        },
        {
            name:'phoneNumber',
            type:'string'
        },
        {
            name:'marriages',
            type:'string'
        },
        {
            name:'isAdmin',
            type:'boolean'
        },
        {
            name:'type',
            type:'string'
        },
    ]
})

export { userSchema };