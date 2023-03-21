import { screen, render } from '@testing-library/react';

test('selecting different elements', () => {
  render(<DataForm />);

  const elements = [];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});
