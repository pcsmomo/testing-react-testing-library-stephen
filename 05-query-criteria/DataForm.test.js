import { screen, render } from '@testing-library/react';

test('selecting different elements', () => {
  render(<DataForm />);

  const elements = [
    // often used
    screen.getByRole('button'),
    // screen.getByText('Enter Data'),
    screen.getByText(/enter/i),

    // it's alright
    // screen.getByLabelText('Email'),
    screen.getByLabelText(/email/i),
    screen.getByPlaceholderText('Red'),
    screen.getByDisplayValue('asdf@asdf.com'),
    screen.getByAltText('data'),
    // screen.getByTitle('Click when ready to submit'),
    screen.getByTitle(/ready to submit/i),

    // if can, avoid
    screen.getByTestId('image wrapper'),
  ];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});
