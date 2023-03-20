import { render, screen } from '@testing-library/react';
import RoleExample from './01-RoleExample';

test('can find elements by role', () => {
  render(<RoleExample />);

  const roles = [
    'link',
    'button',
    'contentinfo',
    'heading',
    'banner',
    'img',
    'checkbox',
    'spinbutton',
    'radio',
    'textbox',
    'listitem',
    'list',
  ];

  for (let role of roles) {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();
  }
});
