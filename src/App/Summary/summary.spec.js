/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Summary from './summary.jsx';

describe('Summary Component', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Summary
      product={
        {
          id: 1,
          unique_id: 1,
          name: 'Amazon Product 1',
          category: 'electronics',
          manufacturer: 'Murazik and Sons',
          primary_image: 'https://s3.us-east-2.amazonaws.com/product-summary-component/electronics1.jpg',
          review_one_star_count: 624,
          review_two_star_count: 639,
          review_three_star_count: 622,
          review_four_star_count: 275,
          review_five_star_count: 251,
          review_count: 2411,
          question_count: 216,
          price: 561,
          total_price: 571,
          stock: 5,
          is_prime: true,
          description: 'string',
        }
      }
    />);
    expect(component).toMatchSnapshot();
  });
});
