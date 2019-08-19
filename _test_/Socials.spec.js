import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Socials from '../src/components/Socials';

describe('Socials component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Socials />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(5);
  });

  it('renders an a tag', () => {
    expect(component.find('a').length).toBe(4);
  });

  it('renders an i tag', () => {
    expect(component.find('i').length).toBe(4);
  });
});
