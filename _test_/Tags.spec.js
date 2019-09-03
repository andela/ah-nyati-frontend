import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Tags from '../src/components/SingleArticle/Tags';

describe('Tags', () => {
  let component;

  const props = {
    tags: ['hello', 'bikes', 'food'],
  };

  beforeEach(() => {
    component = shallow(<Tags {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('has an onclick handler', () => {
    const app = shallow(<Tags tags={['tag']} />);
    expect(app.find('Link').length).toBe(1);
    app.find('Link').simulate('click');
  });

  it('renders three Link', () => {
    expect(component.find('Link').length).toBe(3);
  });

  it('renders no div component', () => {
    component.setProps({ tags: null });
    expect(component.find('div').length).toBe(0);
  });

  it('renders zero div component', () => {
    component.setProps({ tags: [''] });
    expect(component.find('div').length).toBe(0);
  });
});
