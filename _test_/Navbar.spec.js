import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

import Navbar, { Navbar as Nav } from '../src/components/NavigationBar';
import makeMockStore from './Utils/makeMockStore';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {
  describe('Navbar Component', () => {
    let app;
    let res;
    const user = {};

    beforeEach(() => {
      const store = makeMockStore({
        user: {
          payload: {
            userName: 'nyati',
          },
        },
        auth: {
          user: {},
        },
      });
      app = mount(
        <BrowserRouter>
          <Navbar store={store} user={user} />
        </BrowserRouter>,
      );
      res = app.find('Navbar');
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });
    it('Check for nav', () => {
      expect(res.find('nav').length).toBe(1);
    });

    it('Check for div', () => {
      expect(res.find('div').length).toBe(5);
    });

    it('Check for svg', () => {
      expect(res.find('svg').length).toBe(1);
    });

    it('Check for ul', () => {
      expect(res.find('ul').length).toBe(1);
    });

    it('Check for li', () => {
      expect(res.find('li').length).toBe(4);
    });

    it('Check for Link', () => {
      expect(res.find('Link').length).toBe(5);
    });

    it('click notificationFunc', () => {
      const inst = res.instance();
      inst.notificationFunc();
    });

    it('click close', () => {
      const inst = res.instance();
      inst.close();
    });

    it('click dropDown', () => {
      const inst = res.instance();
      inst.dropDown();
    });

    it('click toggleDropdown', () => {
      const inst = res.instance();
      inst.toggleDropdown();
    });

    it('click dropDown ()', () => {
      const inst = res.instance();
      inst.state = {
        width: true,
      };
      inst.dropDown();
    });

    it('click toggleDropdown ()', () => {
      const inst = res.instance();
      inst.state = {
        dropdown: true,
      };
      inst.toggleDropdown();
    });

    it('click openNavbar', () => {
      const inst = res.instance();
      inst.openNavbar();
    });

    it('click resize', () => {
      const inst = res.instance();
      inst.resize();
    });

    it('Click on navbar', () => {
      const submitButton = res.find('.navbar-burger');
      submitButton.simulate('click');
    });

    it('Click on navbar (simulate keypress)', () => {
      const submitButton = res.find('.navbar-burger');
      submitButton.simulate('keyPress');
    });
  });
});
