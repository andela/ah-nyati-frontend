import React from 'react';
import { shallow } from 'enzyme';
import LikeIcon from '../src/components/articleLayout/LikeIcon';

describe('LikeIcon', () => {
  let app;

  beforeEach(() => {
    app = shallow(<LikeIcon likeCount={2} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
