import { screen, render, within } from '@testing-library/react';
import FormData from './FormData';

test('the form displays two buttons', () => {
  render(<FormData />);

  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(2);
});
