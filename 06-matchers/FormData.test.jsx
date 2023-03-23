import { screen, render, within } from '@testing-library/react';
import FormData from './FormData';

// Custom matcher
function toContainRole(container, role, quantity = 1) {
  const elements = within(container).getAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  };
}

expect.extend({ toContainRole });

test('the form displays two buttons', () => {
  render(<FormData />);

  const form = screen.getByRole('form');
  const buttons = within(form).getAllByRole('button');

  expect(buttons).toHaveLength(2);
});

test('the form displays two buttons with custom matcher', () => {
  render(<FormData />);

  const form = screen.getByRole('form');

  expect(form).toContainRole('button', 2);
  // expect(form).toContainRole('button', 10); // fail
  // expect(form).toContainRole('link', 10); // fail
});
