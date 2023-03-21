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

test('getBy, queryBy, findBy when they find 1 element', async () => {
  render(<ColorList />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryByRole('list')).toBeInTheDocument();
  expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getBy, queryBy, findBy when finding > 1 elements', async () => {
  render(<ColorList />);

  expect(() => screen.getByRole('listitem')).toThrow();

  expect(() => screen.queryByRole('listitem')).toThrow();

  let errorThrown = false;
  try {
    await screen.findByRole('listitem');
  } catch (err) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});

test('getAllBy, queryAllBy, findAllBy', async () => {
  render(<ColorList />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  expect(screen.queryAllByRole('listitem')).toHaveLength(3);

  expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});
