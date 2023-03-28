import { render } from '@testing-library/react';
import { queryClient } from '@/api';
import { QueryClientProvider } from 'react-query';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('displays an alert dialog', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );

    expect(container.firstChild).toHaveClass('dogs');
  });
});
