/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Stars from './Stars';
import { Container } from './Stars.style';

describe('Stars Component', () => {
  let wrapper;
  const requiredProps = {
    rating: 4.5,
  };
  beforeEach(() => {
    wrapper = shallow(<Stars
      rating={requiredProps.rating}
    />);
  });

  it('should render correctly render 5 star images', () => {
    expect(
      wrapper
        .find(Container)
        .children(),
    )
      .toHaveLength(5);
  });
});
