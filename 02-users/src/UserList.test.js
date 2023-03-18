import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  // Render the component
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  // Way 1. set data-testid on the tbody
  render(<UserList users={users} />);

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Way 2. set data-testid on the tbody
  // const { container } = render(<UserList users={users} />);

  // // Find all the rows in the table
  // // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr');

  // Assert: correct number of rows
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);

  // screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
