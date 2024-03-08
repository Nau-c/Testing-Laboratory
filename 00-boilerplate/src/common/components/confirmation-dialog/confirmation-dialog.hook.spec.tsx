import React from 'react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock del componente que utiliza el hook
const TestComponent = () => {
  const { isOpen, itemToDelete, onAccept, onClose, onOpenDialog } = useConfirmationDialog();

  return (
    <div>
      <div data-testid="isOpen">{isOpen.toString()}</div>
      <div data-testid="itemName">{itemToDelete.name}</div>
      <button data-testid="acceptButton" onClick={onAccept}>Accept</button>
      <button data-testid="closeButton" onClick={onClose}>Close</button>
      <button data-testid="openDialogButton" onClick={() => onOpenDialog({ id: '1', name: 'ItemToDelete' })}>Open Dialog</button>
    </div>
  );
};

describe('useConfirmationDialog', () => {
  test('renders component and interacts with confirmation dialog', () => {
    const { getByTestId } = render(<TestComponent />);

    // Initial state
    expect(getByTestId('isOpen')).toHaveTextContent('false');
    expect(getByTestId('itemName')).toBeEmptyDOMElement();

    // Open dialog
    fireEvent.click(getByTestId('openDialogButton'));
    expect(getByTestId('isOpen')).toHaveTextContent('true');
    expect(getByTestId('itemName')).toHaveTextContent('ItemToDelete');

    // Close dialog
    fireEvent.click(getByTestId('closeButton'));
    expect(getByTestId('isOpen')).toHaveTextContent('false');
    expect(getByTestId('itemName')).toHaveTextContent('true');

    // Open dialog again
    fireEvent.click(getByTestId('openDialogButton'));
    expect(getByTestId('isOpen')).toHaveTextContent('true');
    expect(getByTestId('itemName')).toHaveTextContent('ItemToDelete');

    // Accept and close dialog
    fireEvent.click(getByTestId('acceptButton'));
    expect(getByTestId('isOpen')).toHaveTextContent('false');
    expect(getByTestId('itemName')).toBeEmptyDOMElement();
  });
});
