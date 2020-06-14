import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Images from './Images';

describe('<Images />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Images />);
    const images = getByTestId('Images');

    expect(images).toBeInTheDocument();
  });
});