import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Loading from '../src/components/Loading';

describe('Loading', () => {
  it('renders the loading spinner', () => {
    const { getByTestId } = render(<Loading />);
    const loadingSpinner = getByTestId('loading-spinner');

    expect(loadingSpinner).toBeInTheDocument();
  });
});
