import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './category-breadcrumb.style';

const CategoryBreadcrumb = ({ category }) => {
  const categoryDiv = (
    <a href="#category">
      {category[0].toUpperCase() + category.slice(1)}
    </a>
  );
  return (
    <Container>
      {categoryDiv}
    </Container>
  );
};

CategoryBreadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryBreadcrumb;
