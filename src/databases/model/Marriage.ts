import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Marriage extends Model {
    static table = "marriage";

    @field('marriage_id')
    marriage_id!: number;

    @field('date')
    date!: string;

    @field('code')
    code!: string;

    @field('fiancee')
    fiancee!: string;

    @field('engaged')
    engaged!: string;

    @field('couple_photo')
    couple_photo!: string| null;

    @field('created_by')
    created_by!: number;
}

export { Marriage };