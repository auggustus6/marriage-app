import React from 'react';
import CustomInput from '../../../components/Form/CustomInput';
import { render } from '../../../utils/tests/helpers';



describe('Tests render AddComment component', () => {
    it('should render not it label', () => {
        const { queryByTestId } = render(
            <CustomInput  />
        );
        const label = queryByTestId('label_test');

        expect(label).toBeFalsy();
    });

    it('should render the label', () => {
        const { getByTestId } = render(
            <CustomInput label="Olá mundo"  />
        );
        const label = getByTestId('label_test');
        expect(label).toBeTruthy();
        expect(label?.props.children).toBe('Olá mundo');
    });

    it('should render default label color', () => {
        const { getByTestId } = render(
            <CustomInput label="Olá mundo" />
        );
        const label = getByTestId('label_test');

        expect(label.props.style[0].color).toBe('#969cb2');
    });

    it('should render label color when prop existed', () => {
        const { getByTestId } = render(
            <CustomInput label="Olá mundo" labelColor='#f1003b' />
        );
        const label = getByTestId('label_test');

        expect(label.props.style[0].color).toBe('#f1003b');
    });

    it('should render the input', () => {
        const { getByTestId } = render(
            <CustomInput testID='input_test'  />
        );
        const input = getByTestId('input_test');
        expect(getByTestId).toBeDefined();
    });

});