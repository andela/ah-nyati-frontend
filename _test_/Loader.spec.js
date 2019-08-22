import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader from '../src/components/Loader';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader', () => {
  describe('Loader Component', () => {
    let app;

    beforeEach(() => {
      app = shallow(<Loader />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('Check for div', () => {
      expect(app.find('div').length).toBe(3);
    });

    it('click timeOut', () => {
      const inst = app.instance();
      inst.timeOut();
    });

    it('click reload', () => {
      const inst = app.instance();
      inst.reload();
    });
  });
});
