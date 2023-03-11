import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoriesItem from './CategoriesItem';

import '@testing-library/jest-dom';

/**
 * skenario testing
 *
 * - CategoriesItem component
 *   - should render correctly
 */

describe('CategoriesItem component', () => {
  it('should render correctly', async () => {
    // Arrange
    render(<CategoriesItem onAddThread={() => {}} />);
    const categories = screen.getByTestId('categories');

    // Assert
    expect(categories).toBeVisible();
  });
});
