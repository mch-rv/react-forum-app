import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const registerInput = screen.getByPlaceholderText('Name');

    // Action
    await act(async () => { await userEvent.type(registerInput, 'testUser'); });

    // Assert
    expect(registerInput).toHaveValue('testUser');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await act(async () => { await userEvent.type(emailInput, 'test@user.com'); });

    // Assert
    expect(emailInput).toHaveValue('test@user.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await act(async () => { await userEvent.type(passwordInput, 'SecretPassword'); });

    // Assert
    expect(passwordInput).toHaveValue('SecretPassword');
  });

  it('should call onAddThread function when login button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const registerInput = screen.getByPlaceholderText('Name');
    await act(async () => { await userEvent.type(registerInput, 'testUser'); });
    const emailInput = screen.getByPlaceholderText('Email');
    await act(async () => { await userEvent.type(emailInput, 'test@user.com'); });
    const passwordInput = screen.getByPlaceholderText('Password');
    await act(async () => { await userEvent.type(passwordInput, 'SecretPassword'); });
    const registerButton = screen.getByRole('button', { name: 'Register' });

    // Action
    await act(async () => { await userEvent.click(registerButton); });

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'testUser',
      email: 'test@user.com',
      password: 'SecretPassword',
    });
  });
});
