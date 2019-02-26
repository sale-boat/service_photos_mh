/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './gallery';
import { Container } from './gallery.style';

describe('Gallery Component', () => {
  let wrapper;
  const requiredProps = {
    images: ['test', 'test', 'test'],
    handleImageHover: () => {},
  };
  beforeEach(() => {
    wrapper = shallow(<Gallery images={requiredProps.images} />);
  });
  it('should render correctly with required props', () => {
    expect(wrapper.find(Container).children()).toHaveLength(2);
  });
});
