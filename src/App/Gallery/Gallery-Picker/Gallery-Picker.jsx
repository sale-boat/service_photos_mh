/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Gallery-Picker.style';

const GalleryPicker = ({ images, handleImageHover }) => {
  const imagesDivs = images.map((value, index) => (
    <div key={value}>
      <img
        className={index === 0 ? 'selected pickerImage' : 'pickerImage'}
        onMouseOver={handleImageHover}
        onFocus={handleImageHover}
        id={`pickerImage-${index}`}
        src={value}
        alt={`${index}`}
      />
    </div>
  ));
  return (
    <Container>
      {imagesDivs}
    </Container>
  );
};

GalleryPicker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleImageHover: PropTypes.func.isRequired,
};

export default GalleryPicker;
