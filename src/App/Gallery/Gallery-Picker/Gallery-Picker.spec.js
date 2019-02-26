/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import GalleryPicker from './Gallery-Picker';
import { Container } from './Gallery-Picker.style';

describe('GalleryPicker Component', () => {
  let wrapper;
  let testVar = false;
  const requiredProps = {
    images: ['http://lorempixel.com/400/200/', 'http://lorempixel.com/400/200/', 'http://lorempixel.com/400/200/'],
    handleImageHover: () => {
      testVar = true;
      return true;
    },
  };
  beforeEach(() => {
    wrapper = shallow(<GalleryPicker
      images={requiredProps.images}
      handleImageHover={requiredProps.handleImageHover}
    />);
  });

  it('should render correctly with props.images of length 3', () => {
    expect(
      wrapper
        .find(Container)
        .children(),
    )
      .toHaveLength(requiredProps.images.length);
  });

  it('should correctly activate onMouseOver Handler', () => {
    wrapper.find('img#pickerImage-0').simulate('mouseover');
    expect(testVar).toEqual(true);
    testVar = false;
  });

  it('should correctly activate onFocus Handler', () => {
    wrapper.find('img#pickerImage-0').simulate('focus');
    expect(testVar).toEqual(true);
    testVar = false;
  });
});
