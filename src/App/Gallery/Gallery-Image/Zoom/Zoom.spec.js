/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Zoom from './Zoom';
import { Container } from './Zoom.style';


describe('Zoom Component', () => {
  let wrapper;
  const requiredProps = {
    image: 'http://lorempixel.com/400/200/',
    absolutePositionTop: 0,
    absolutePositionLeft: 0,
    zoomHeight: 0,
    zoomWidth: 0,
    xPosition: '0%',
    yPosition: '0%',
  };
  beforeEach(() => {
    wrapper = shallow(
      <Zoom
        image={requiredProps.image}
        xPosition={requiredProps.xPosition}
        yPosition={requiredProps.yPosition}
        absolutePositionTop={requiredProps.absolutePositionTop}
        absolutePositionLeft={requiredProps.absolutePositionLeft}
        zoomHeight={requiredProps.zoomHeight}
        zoomWidth={requiredProps.zoomWidth}
      />,
    );
  });

  it('should render correctly with length of 1', () => {
    expect(wrapper.find(Container))
      .toHaveLength(1);
  });
});
