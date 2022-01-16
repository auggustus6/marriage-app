import React from 'react';
import { AvatarUser } from '../../components/AvatarUser';
import { render, fireEvent, act } from '../../utils/tests/helpers';


jest.mock('../../databases');
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
           
    })
}));

describe('Tests render AddComment component', () => {
    it('should contain url image default', () => {
        let nav = jest.fn();
        const { getByTestId } = render(
            <AvatarUser  />
        );
        const button = getByTestId('test_buttonAvatarUser');

        fireEvent.press(button);

        expect(nav).toHaveBeenCalledTimes(1);
    });



});