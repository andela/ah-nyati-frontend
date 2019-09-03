import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import ConnectMain, { MainArticle } from '../src/components/SingleArticle/MainArticle';
import image from '../src/assets/articleImage.png';
import makeMockStore from './Utils/makeMockStore';

const store = makeMockStore({
  article: {
    response: 'Article successfully deleted',
  },
  err: {
    error: 'error',
  },
});

describe('Main Article', () => {
  let component;
  let app;
  let mainApp;
  let mainInstance;

  const props = {
    views: 1,
    imageUrl: '',
    reponse: 'Article successfully deleted',
    deleteArticle: jest.fn(),
  };

  beforeEach(() => {
    document.querySelectorAll = () => ['node'];
    app = shallow(
      <BrowserRouter>
        <ConnectMain {...props} store={store} />
      </BrowserRouter>,
    );
    mainApp = shallow(<MainArticle {...props} />);
    mainInstance = mainApp.instance();
  });

  it('has a toggleModal method', () => {
    expect(mainInstance).toBeDefined();
    mainInstance.state = {
      isSubmitted: true,
    };
    mainInstance.toggleModal();
    mainInstance.handleSubmit();
    mainInstance.componentDidUpdate();
  });

  it('sends an error response', () => {
    const propsTwo = {
      views: 1,
      imageUrl: '',
      deleteArticle: jest.fn(),
      error: 'Request failed with status code 404',
      response: '',
    };
    const appTwo = shallow(<MainArticle {...propsTwo} />);
    const mainInst = appTwo.instance();
    mainInst.state = {
      isSubmitted: true,
    };
    expect(mainInstance).toBeDefined();
    mainInst.toggleModal();
    mainInst.handleSubmit();
    mainInst.componentDidUpdate();
  });

  it('sends an success response', () => {
    const propsTwo = {
      views: 1,
      imageUrl: '',
      deleteArticle: jest.fn(),
      error: '',
      response: 'Article successfully deleted',
    };
    const appTwo = shallow(<MainArticle {...propsTwo} />);
    const mainInst = appTwo.instance();
    mainInst.state = {
      isSubmitted: true,
    };
    expect(mainInstance).toBeDefined();
    mainInst.toggleModal();
    mainInst.handleSubmit();
    mainInst.componentDidUpdate();
  });

  it('renders successfully', () => {
    const appComp = app.dive().dive().dive().dive();
    component = appComp.dive().dive().dive();
    expect(app).toBeDefined();
  });

  it('renders three div tags', () => {
    expect(component.find('div').length).toBe(5);
    component.setProps({ views: 2 });
    component.setProps({ imageUrl: image });
  });

  it('renders an h1 tag', () => {
    expect(component.find('h1').length).toBe(1);
  });

  it('renders an Link tag', () => {
    expect(component.find('Link').length).toBe(2);
  });

  it('renders a p tag', () => {
    expect(component.find('p').length).toBe(4);
  });

  it('renders a span tag', () => {
    expect(component.find('span').length).toBe(4);
  });

  it('renders an image tag', () => {
    expect(component.find('img').length).toBe(1);
  });
});
