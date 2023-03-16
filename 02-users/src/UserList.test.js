import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  // Render the component
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  // Find all the rows in the table
  // Assert: correct number of rows
});

test('render the email and name of each user', () => {});
