import React from 'react';
import expect from 'expect';
import checkPropTypes from 'check-prop-types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from '../src/components/Paginate';

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination', () => {
  describe('Pagination Component', () => {
    let app;
    const article = {
      totalPages: 2,
    };

    const paginate = () => { };

    beforeEach(() => {
      app = shallow(<Pagination article={article} paginate={paginate} />);
    });

    it('renders successfully', () => {
      expect(app).toBeDefined();
    });

    it('Check for div', () => {
      expect(app.find('div').length).toBe(1);
    });

    it('click paginateReduce', () => {
      const inst = app.instance();
      inst.paginateReduce(true, false);
    });

    it('click paginateReduce (small screen)', () => {
      const inst = app.instance();
      inst.state = {
        width: 400,
      };
      inst.paginateReduce(true, false);
    });
  });

  describe('CHECK PROPTYPES', () => {
    it('Proptype should not throw an error', () => {
      const expectedProps = {
        article: {},
        paginate: () => {},
      };

      const propsErr = checkPropTypes(
        Pagination.propTypes,
        expectedProps,
        'props',
        Pagination.name,
      );
      expect(propsErr).toBeUndefined();
    });
  });
});
