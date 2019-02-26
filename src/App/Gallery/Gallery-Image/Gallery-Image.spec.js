/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import GalleryImage from './Gallery-Image';

describe('GalleryImage Component', () => {
  let wrapper;
  const requiredProps = {
    image: 'http://lorempixel.com/400/200/',
  };
  beforeEach(() => {
    wrapper = shallow(<GalleryImage
      image={requiredProps.image}
    />);
  });

  it('should render correctly with image props.image src', () => {
    expect(
      wrapper
        .find('img')
        .props().src,
    )
      .toEqual(requiredProps.image);
  });
});
