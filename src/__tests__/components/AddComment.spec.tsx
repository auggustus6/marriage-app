import React from 'react';
import AddComment from "../../components/AddComment";
import { fireEvent, render, act } from "../../utils/tests/helpers";


jest.mock('../../databases');

describe('Tests render AddComment component', () => {
    it('Render component correctly', () => {
        const { getByPlaceholderText } = render(
            <AddComment idMural={1} />
        );
        const input = getByPlaceholderText('Adicionar comentário');

        expect(input).toBeTruthy();
    });


    it('should written component and return value of input', () => {
        const { getByPlaceholderText } = render(
            <AddComment idMural={1} />
        );
        const input = getByPlaceholderText('Adicionar comentário');

        fireEvent.changeText(input, 'message with test');

        expect(input.props.value).toBe('message with test');
    });

    it('should written component and send message button press', async () => {
        const handleAddComment = jest.fn(() => Promise.resolve())

        const { getByPlaceholderText, getByTestId } = render(
            <AddComment idMural={1} />
        );
        const input = getByPlaceholderText('Adicionar comentário');

        fireEvent.changeText(input, 'message with test');

        const button = getByTestId('button-add-comment');

        fireEvent.press(button);

        await act(() => handleAddComment());

        expect(input.props.value).toBe('');
    });

});