import React from 'react';
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Profiles, mapStateToProps } from '../src/views/Profile';

Enzyme.configure({ adapter: new Adapter() });


describe('<Profiles />', () => {
  let app;

  const props = {
    match: { params: { userId: 2 } },
    componentDidMount: jest.fn(),
    userProfiles: jest.fn(),
    userArticles: jest.fn(),
    profile: {
      profiles: {
        username: 'My name',
      },
      loading: false,
      profileArticles: {},
    },
  };

  beforeEach(() => {
    app = shallow(<Profiles {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders loadeer', () => {
    app = shallow(<Profiles {...{ ...props, profile: { ...props.profile, loading: true } }} />);
  });
  it('renders no profile found', () => {
    app = shallow(<Profiles {...{ ...props, profile: { ...props.profile, profiles: {} } }} />);
  });

  it('set initial page to one', () => {
    app = shallow(<Profiles {...{ ...props, profile: { ...props.profile, profileArticles: null } }} />);
  });

  it('test map state to props', () => {
    expect(mapStateToProps({ profile: {}, auth: {} })).toEqual({ profile: {}, auth: {} });
  });

  it('test pagiation', () => {
    app = mount(<Profiles {...{ ...props, profile: { ...props.profile, profileArticles: [{}, {}, {}, {}, {}, {}, {}, {}] } }} />);
    app.find('.next').simulate('click');
    app.instance().paginate({ selected: 1 });
  });
});
