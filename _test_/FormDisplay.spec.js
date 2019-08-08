import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/PasswordReset/FormDisplay';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders a div tag', () => {
    expect(app.find('div').length).toBe(4);
  });

  it('renders a blockquote tag', () => {
    expect(app.find('blockquote').length).toBe(1);
  });

  it('renders a br tag', () => {
    expect(app.find('br').length).toBe(2);
  });

  it('renders a cite tag', () => {
    expect(app.find('cite').length).toBe(1);
  });
});
