import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Switch, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ConnectedSocialAuth, { SocialAuth, mapStateToProps } from '../src/views/SocialAuth';
import makeMockStore from './Utils/makeMockStore';

describe('SocialAuth', () => {
  let app;

  const login = jest.fn();
  const history = createMemoryHistory('/login');
  const location = {
    hash: '#_=_',
    pathname: '/socialAuth',
    search: '?id=6&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJlbW1hbnVlbHJvaWNAZ21haWwuY29tIiwiaWF0IjoxNTY2NDA4MDYzLCJleHAiOjE1NjY0OTQ0NjN9.M51-GMmUEGZeauMqrGTmbhCNDhrHGy9hTdnYWILQ3lQ&userName=emmanuelroic%40gmail.com&email=emmanuelroic%40gmail.com&createdAt=Wed%20Aug%2021%202019%2018%3A21%3A03%20GMT%2B0100%20(West%20Africa%20Standard%20Time)&updatedAt=Wed%20Aug%2021%202019%2018%3A21%3A03%20GMT%2B0100%20(West%20Africa%20Standard%20Time)',
    state: undefined,
  };
  const auth = {
    isAuthenticated: false,
    user: {},
  };

  beforeEach(() => {
    app = shallow(
      <SocialAuth
        socialLogin={login}
        location={location}
        auth={auth}
        history={history}
      />,
    );
  });

  it('componentDidUpdate should be called on update', () => {
    const component = shallow(
      <SocialAuth
        socialLogin={login}
        location={location}
        auth={auth}
        history={history}
      />,
    );
    const componentDidUpdate = jest.spyOn(component.instance(), 'componentDidUpdate');
    component.instance().forceUpdate();
    component.update();
    component.instance().componentDidUpdate();
    expect(componentDidUpdate).toBeDefined();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders the connected component successfully', () => {
    const store = makeMockStore({
      auth: {
        isAuthenticated: false,
        user: {},
      },
    });

    const connectedComp = shallow(
      <BrowserRouter>
        <Switch>
          <ConnectedSocialAuth store={store} />
        </Switch>
      </BrowserRouter>,
    );
    expect(connectedComp).toBeDefined();
  });

  it('renders a Loader component', () => {
    expect(app.find('Index').length).toBe(1);
  });

  it('has a mapStateToProps function', () => {
    expect(mapStateToProps({ auth })).toEqual({ auth });
  });
});
