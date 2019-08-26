import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Comments from '../src/components/Comments';

describe('Main Article', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Comments />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div tag', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('renders an h1 tag', () => {
    expect(component.find('h1').length).toBe(1);
  });
});
