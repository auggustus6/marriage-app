import React from 'react';
import AddComment from "../../components/AddComment";
import Avatar from '../../components/Avatar';
import { render, fireEvent, act } from '../../utils/tests/helpers';
jest.mock('../../databases');


const AvatarProps = {
    width:200,
    height:200,
}

describe('Tests render AddComment component', () => {
    it('should contain url image default', () => {
        const { getByRole } = render(
            <Avatar {...AvatarProps} />
        );
        const element = getByRole('image');

        expect(element.props.source.uri).toContain('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhCKYB9NLvGfTTbqjqi_a2M7ZUM79yc48VQ&usqp=CAU');
    });

    it('should contain border color when it prop passed', () => {
        const { getByRole } = render(
            <Avatar {...AvatarProps} borderColor="#D68983" />
        );
        const element = getByRole('image');

        expect(element.props.borderColor).toBe('#D68983');
    });

});