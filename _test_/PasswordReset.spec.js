import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/PasswordReset/PasswordReset';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div tag', () => {
    expect(app.find('div').length).toBe(2);
  });

  it('renders a form tag', () => {
    expect(app.find('form').length).toBe(1);
  });

  it('renders a p tag', () => {
    expect(app.find('p').length).toBe(2);
  });

  it('renders a input tag', () => {
    expect(app.find('input').length).toBe(3);
  });
});
