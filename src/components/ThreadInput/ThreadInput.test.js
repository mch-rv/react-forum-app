import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';

import '@testing-library/jest-dom';

/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle password typing correctly
 *   - should call onAddThread function when add button is clicked
 */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput onAddThread={() => {}} />);
    const titleInput = screen.getByPlaceholderText('Judul');

    // Action
    await act(async () => { await userEvent.type(titleInput, 'Hello!'); });

    // Assert
    expect(titleInput).toHaveValue('Hello!');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput onAddThread={() => {}} />);
    const categoryInput = screen.getByPlaceholderText('Kategori');

    // Action
    await act(async () => { await userEvent.type(categoryInput, 'react'); });

    // Assert
    expect(categoryInput).toHaveValue('react');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput onAddThread={() => {}} />);
    const bodyInput = screen.getByTestId('body');

    // Action
    await act(async () => { await userEvent.type(bodyInput, 'test'); });

    // Assert
    expect(bodyInput).toHaveValue('test');
  });

  it('should call onAddThread function when login button is clicked', async () => {
    // Arrange
    const mockAddThread = jest.fn();
    render(<ThreadInput onAddThread={mockAddThread} />);
    const titleInput = screen.getByPlaceholderText('Judul');
    await act(async () => { await userEvent.type(titleInput, 'Hello!'); });
    const categoryInput = screen.getByPlaceholderText('Kategori');
    await act(async () => { await userEvent.type(categoryInput, 'react'); });
    const bodyInput = screen.getByTestId('body');
    await act(async () => { await userEvent.type(bodyInput, 'test'); });
    const addButton = screen.getByRole('button', { name: 'Post Thread' });

    // Action
    await act(async () => { await userEvent.click(addButton); });

    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'Hello!',
      category: 'react',
      body: 'test',
    });
  });
});
