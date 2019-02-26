import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Stars.style';

const Stars = ({ rating }) => {
  const starImg = {
    full: 'https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png',
    half: 'https://s3.us-east-2.amazonaws.com/product-summary-component/halfStar.png',
    empty: 'https://s3.us-east-2.amazonaws.com/product-summary-component/emptyStar.png',
  };
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (rating - i > 1 || rating - i > 0.75) {
      stars.push(<img key={i} src={starImg.full} alt="Full Star" />);
    } else if (rating - i > 0.25) {
      stars.push(<img key={i} src={starImg.half} alt="Half Star" />);
    } else {
      stars.push(<img key={i} src={starImg.empty} alt="Emtpy Star" />);
    }
  }
  return (
    <Container>
      {stars}
    </Container>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
