import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('displays an alert dialog', () => {
    render(<Home />);

    const heading = screen.getByRole('alertdialog', {
      description: 'You have unread emails',
    });

    expect(heading).toBeInTheDocument();
  });
});
