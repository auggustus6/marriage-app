import { tableSchema } from '@nozbe/watermelondb';

const marriageSchema = tableSchema({
    name: "marriage",
    columns: [
        {
            name:'marriage_id',
            type:'number'
        },
        {
            name:'date',
            type:'string'
        },
        {
            name:'code',
            type:'string'
        },
        {
            name:'fiancee',
            type:'string'
        },
        {
            name:'engaged',
            type:'string'
        },
        {
            name:'couple_photo',
            type:'string'
        },
        {
            name:'created_by',
            type:'number'
        },
    ]
})

export { marriageSchema };