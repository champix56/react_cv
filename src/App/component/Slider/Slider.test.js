import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from './Slider';

describe('<Slider />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Slider />);
    const slider = getByTestId('Slider');

    expect(slider).toBeInTheDocument();
  });
});