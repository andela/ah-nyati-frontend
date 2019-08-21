import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProfileArticles from '../src/components/Profile/ProfileArticles';


describe('<profileArticles />', () => {
  let app;

  const props = {
    profileArticles: {
      articles: [{
        title: 'hello',
        slug: 'hdhdbgdh',
        id: 3,
        imageUrl: '',
      }],
    },
  };

  beforeEach(() => {
    app = shallow(<ProfileArticles {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
