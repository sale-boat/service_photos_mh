import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Zoom.style';

const Zoom = ({
  image,
  xPosition,
  yPosition,
  absolutePositionTop,
  absolutePositionLeft,
  zoomHeight,
  zoomWidth,
}) => (
  <Container
    style={{
      backgroundImage: `url(${image})`,
      width: zoomWidth,
      height: zoomHeight,
      backgroundPositionX: xPosition,
      backgroundPositionY: yPosition,
      top: absolutePositionTop,
      left: absolutePositionLeft,
    }}
  />
);

Zoom.propTypes = {
  image: PropTypes.string.isRequired,
  xPosition: PropTypes.string.isRequired,
  yPosition: PropTypes.string.isRequired,
  absolutePositionLeft: PropTypes.number.isRequired,
  absolutePositionTop: PropTypes.number.isRequired,
  zoomHeight: PropTypes.number.isRequired,
  zoomWidth: PropTypes.number.isRequired,
};

export default Zoom;
