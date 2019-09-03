import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import RatingsBtn from '../src/components/SingleArticle/RatingsBtn/index';


describe('App', () => {
  const props = {
    toggle: jest.fn(),
    dropdownOpen: false,
    prevState: { dropdown: false },
  };

  let app;
  beforeEach(() => {
    app = shallow(<RatingsBtn {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('toggles the dropdown menu when clicked', () => {
    const toggleButton = app.find('#toggle');
    expect(toggleButton).toHaveLength(1);
    toggleButton.simulate('click');

    expect(app).toMatchSnapshot();
  });
  it('toggles the dropdown menu if clicked', () => {
    app.instance().toggle(props.prevState);
    const render = jest.spyOn(app.instance(), 'toggle');
    expect(render).toHaveBeenCalledTimes(0);
  });
});
