/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryBreadcrumb from './category-breadcrumb.jsx';
import { Container } from './category-breadcrumb.style.js';

describe('CategoryBreadcrumb Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CategoryBreadcrumb category="example" />);
  });

  it('should render correctly with props', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should render correct category with capital letter', () => {
    const string = 'example';
    const capitalStr = `${string[0].toUpperCase()}${string.slice(1)}`;
    expect(wrapper.find('a').text()).toEqual(`${capitalStr}`);
  });
});
