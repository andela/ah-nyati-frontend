import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SocialShare from '../src/components/socialShare';

describe('ArticleCard', () => {
  let app;
  beforeEach(() => {
    const article = {
      title: 'Test',
    };
    app = shallow(<SocialShare article={article} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(7);
  });
});
