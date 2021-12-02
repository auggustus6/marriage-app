import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import json from '@nozbe/watermelondb/decorators/json';
import { MarriageProps } from '../../hooks/useMarriage';

const sanitizeReactions = (json: any) => json;

class User extends Model {
    static table = "user";

    @field('user_id')
    user_id!: number;

    @field('name')
    name!: string;

    @field('email')
    email!: string;

    @field('phoneNumber')
    phoneNumber!: string;

    @json('marriages', sanitizeReactions)
    marriages!: any;

    @field('isAdmin')
    isAdmin!: boolean;

    @field('type')
    type!: string;
}

export { User };