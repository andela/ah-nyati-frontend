import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CommentsBtn from '../src/components/SingleArticle/CommentsBtn';


describe('Single Article', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentsBtn />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('renders a Link component', () => {
    expect(component.find('Link').length).toBe(1);
  });
});
