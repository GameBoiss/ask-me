import { render } from '@testing-library/react';
import { queryClient } from '@/api';
import { QueryClientProvider } from 'react-query';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('table grid', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );

    expect(container.firstChild).toHaveClass('dogs');
  });
});
