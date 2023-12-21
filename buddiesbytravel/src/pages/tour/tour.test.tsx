import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TourCreatePage from './tour';

describe('TourCreatePage', () => {
    test('renders without errors', () => {
        render(<TourCreatePage />);
    });

    test('updates state when input values change', () => {
        const { getByPlaceholderText } = render(<TourCreatePage />);
        const titleInput = getByPlaceholderText('Title');
        const descriptionInput = getByPlaceholderText('Description');

        fireEvent.change(titleInput, { target: { value: 'New Title' } });
        fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

        expect(titleInput.value).toBe('New Title');
        expect(descriptionInput.value).toBe('New Description');
    });

    test('calls handleSubmit when form is submitted', () => {
        const handleSubmit = jest.fn();
        const { getByText } = render(<TourCreatePage handleSubmit={handleSubmit} />);
        const submitButton = getByText('Create Tour');

        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
