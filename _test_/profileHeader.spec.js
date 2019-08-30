import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import ProfileHeader from '../src/components/Profile/ProfileHeader';


describe('<ProfileHeader />', () => {
  let app;

  const props = {
    profile: {
      firstName: 'Choko',
      lastName: 'Naira',
      userName: 'hey',
      imageUrl: 'https://myimage.png',
    },
    articlesLength: [],
  };

  beforeEach(() => {
    app = mount(<ProfileHeader {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
    expect(app.find('.profile-tag h3').at(0).text()).toBe('Choko Naira');
  });
});
