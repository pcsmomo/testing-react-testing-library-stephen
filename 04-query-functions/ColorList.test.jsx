import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy finding 0 elements', async () => {
  render(<ColorList />);

  // getBy* queries throw an error if no elements are found
  expect(() => screen.getByRole('textbox')).toThrow();

  // queryBy* queries return null if no elements are found
  expect(screen.queryByRole('textbox')).toBeNull();

  // findBy* queries return a Promise which rejects if no elements are found
  let errorThrown = false;
  try {
    await screen.findByRole('textbox');
  } catch (err) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});
