import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import RepositoriesListItem from './RepositoriesListItem';

// 4. (Worst) Use an `act` with a `pause`

// 1. (Best) Use a `findBy` or `findAllBy` to detect when the component has finished its data fetching
// 2. Use an `act` to control when the data-fetching request gets resolved. More on this later.
// 3. Use a module mock to avoid rendering the troublesome component

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
}

test('shows a link to the github homepage for this repository', async () => {
  renderComponent();

  // screen.debug();
  await waitFor(async () => {
    await pause();
  });
  // screen.debug();

  screen.getByRole('img', { name: 'Javascript' });
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
};
