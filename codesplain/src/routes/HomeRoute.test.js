import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';

import { createServer } from '../test/server';

// GOAL:
createServer([
  {
    path: '/api/repositories',
    method: 'get',
    res: (req, _res, _ctx) => {
      const language = req.url.searchParams.get('q').split('language:')[1];

      return {
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      };
    },
  },
]);

// Original handler code
// const handlers = [
//   rest.get('/api/repositories', (req, res, ctx) => {
//     const language = req.url.searchParams.get('q').split('language:')[1];

//     return res(
//       ctx.json({
//         items: [
//           { id: 1, full_name: `${language}_one` },
//           { id: 2, full_name: `${language}_two` },
//         ],
//       })
//     );
//   }),
// ];

test('renders two links for each language', async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  // await pause();
  // screen.debug();

  // Loop over each language
  const languages = [
    'javascript',
    'typescript',
    'rust',
    'go',
    'python',
    'java',
  ];

  for (const language of languages) {
    // For each language, make sure we see two links
    const links = await screen.findAllByRole('link', {
      name: new RegExp(`${language}_`, 'i'),
    });

    expect(links).toHaveLength(2);
    // Assert that the links have the appropriate full_name
    expect(links[0]).toHaveTextContent(`${language}_one`);
    expect(links[1]).toHaveTextContent(`${language}_two`);
    expect(links[0]).toHaveAttribute('href', `/repositories/${language}_one`);
    expect(links[1]).toHaveAttribute('href', `/repositories/${language}_two`);
  }
});

// const pause = () =>
//   new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
