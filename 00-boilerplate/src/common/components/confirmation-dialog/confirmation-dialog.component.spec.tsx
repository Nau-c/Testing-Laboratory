import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

const mockOnAccept = jest.fn();
const mockOnClose = jest.fn();

const defaultProps = {
  isOpen: true,
  onAccept: mockOnAccept,
  onClose: mockOnClose,
  title: 'Test title',
  labels: { closeButton: 'Close', acceptButton: 'Accept' },
  children: 'Test children'
};
describe('Confirmation Dialog Component', () => {

  // Your test logic here
  // const mockOnAccept = jest.fn();
  // const mockOnClose = jest.fn();
  it('renders correctly', () => {
    const { getByText } = render(<ConfirmationDialogComponent {...defaultProps} />);

    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Test children')).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();
    expect(getByText('Accept')).toBeInTheDocument();

  });

  it('calls onAccept and onClose when clicking on accept button', () => {
    const { getByText } = render(<ConfirmationDialogComponent {...defaultProps} />);

    fireEvent.click(getByText('Accept'));

    expect(mockOnAccept).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

});
