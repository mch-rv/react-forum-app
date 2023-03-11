import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await act(async () => { await userEvent.type(emailInput, 'ujang@ujang.com'); });

    // Assert
    expect(emailInput).toHaveValue('ujang@ujang.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await act(async () => { await userEvent.type(passwordInput, 'ujangu'); });

    // Assert
    expect(passwordInput).toHaveValue('ujangu');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = screen.getByPlaceholderText('Email');
    await act(async () => { await userEvent.type(emailInput, 'ujang@ujang.com'); });
    const passwordInput = screen.getByPlaceholderText('Password');
    await act(async () => { await userEvent.type(passwordInput, 'ujangu'); });
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Action
    await act(async () => { await userEvent.click(loginButton); });

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'ujang@ujang.com',
      password: 'ujangu',
    });
  });
});
