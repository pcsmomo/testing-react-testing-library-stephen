import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import RepositoriesListItem from './RepositoriesListItem';

// 1. (Best) Use a `findBy` or `findAllBy` to detect when the component has finished its data fetching

// 2. Use an `act` to control when the data-fetching request gets resolved. More on this later.
// 3. Use a module mock to avoid rendering the troublesome component
// 4. (Worst) Use an `act` with a `pause`

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: 'facebook',
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test('shows a link to the github homepage for this repository', async () => {
  const { repository } = renderComponent();

  await screen.findByRole('img', { name: 'Javascript' });

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', repository.html_url);
});
