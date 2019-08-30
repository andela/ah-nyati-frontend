import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ConnectedCreateArticle, { CreateArticle, mapDispatchToProps } from '../src/components/article/CreateArticlePage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const file = new File(['(⌐□_□)'], 'image-data.png', { type: 'image/*' });

const props = {
  newArticle: jest.fn(() => Promise.resolve({ status: 201 })),
  history: {
    push: jest.fn(),
  },
  allCategories: jest.fn(() => Promise.resolve({
    payload: [
      {
        categories: [
          {
            name: 'Technology',
            id: 1,
          },
          {
            name: 'Music',
            id: 2,
          },
        ],
      },
    ],
  })),
};


describe('Error', () => {
  let app;

  const initialState = {};
  const store = mockStore(initialState);
  beforeEach(() => {
    app = shallow(<CreateArticle {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(12);
  });

  it('renders loader', () => {
    app = shallow(<CreateArticle {...{ ...props, isLoading: true }} />);
    expect(app.find('Loader')).toBeTruthy();
  });

  it('renders a section component', () => {
    expect(app.find('section').length).toBe(1);
  });
  it('renders a Editor component', () => {
    expect(app.find('Editor').length).toBe(1);
  });
  it('renders a h4 component', () => {
    expect(app.find('h4').length).toBe(1);
  });
  it('renders a select component', () => {
    expect(app.find('select').length).toBe(1);
  });
  it('renders a button component', () => {
    expect(app.find('button').length).toBe(1);
  });

  it('renders a input component', () => {
    expect(app.find('input').length).toBe(3);
  });

  it('should set state when article an article field is entered', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    const instance = wrapper.find('input[name="title"]');

    instance.simulate('change', { target: { name: 'title', value: 'This is a test article' } });
    expect(wrapper.state().form.title).toBe('This is a test article');
  });

  it('should show error when title is empty', () => {
    const wrapper = shallow(<CreateArticle {...{ ...props, errors: { title: 'title is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' title is empty ');
  });

  it('should show error when body is empty', () => {
    const wrapper = shallow(<CreateArticle {...{ ...props, errors: { body: 'body is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' body is empty ');
  });

  it('should show error when category is empty', () => {
    const wrapper = shallow(<CreateArticle {...{ ...props, errors: { catId: 'category is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' category is empty ');
  });

  it('should set state when image file is uploaded', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    const instance = wrapper.find('ReactImageUploadComponent[name="imageInput"]');

    instance.simulate('change', { target: { files: [file] } });
    expect(wrapper.state().images).toBeUndefined();
  });

  it('should set state when article body is entered', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    const instance = wrapper.find('Editor[apiKey="z4ea4n1he2tp6mka3q7wwqy50yum2b7i8ub29o6qaoq6rlde"]');

    instance.simulate('change', { target: { getContent: jest.fn(() => 'This is a test article') } });
    expect(wrapper.state().form.body).toBe('This is a test article');
  });

  it('handle submit action', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    const instance = wrapper.find('button[className="btn button"]');

    wrapper.setState({
      form: {
        title: 'am an article',
        catId: 5,
        tags: 'am,article,still',
        body: 'i thougth I said am an article',
        description: 'is just a simple description',
        images: null,
      },
      pictures: [],
      categories: [],
    });

    instance.simulate('click');
    expect(wrapper.state().form.catId).toBe(5);
  });

  it('handle isDraft action', () => {
    const wrapper = shallow(<CreateArticle {...props} />);

    wrapper.setState({
      form: {
        title: 'am an article',
        catId: 8,
        tags: 'am,article,still',
        body: 'I thougth I said am an article',
        description: 'is just a simple description',
        images: null,
      },
      pictures: [],
      categories: [],
    });

    wrapper.instance().saveDraft();
    expect(wrapper.state().form.catId).toBe(8);
  });

  it('handle isDraft else action', () => {
    const wrapper = shallow(<CreateArticle {...props} />);

    wrapper.setState({
      form: {
        title: '',
        catId: '',
        tags: 'am,article,still',
        body: '',
        description: 'is just a simple description',
        images: null,
      },
      pictures: [],
      categories: [],
    });

    wrapper.instance().saveDraft();
    expect(wrapper.state().form.title).toBe('');
  });
  it('List category', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    wrapper.setState({
      categories: [
        {
          id: 1,
          name: 'Technology',
        },
      ],
    });

    expect(wrapper.find('option')).toHaveLength(2);
    expect(wrapper.find('option').at(1).text()).toEqual('Technology');
  });
  it('should dispatch article request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).newArticle();
  });
  it('should dispatch category request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).allCategories();
  });

  it('dds aghvxhasd', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn(), target: { } });
  });

  it('ddd', () => {
    const wrapper = shallow(<CreateArticle {...props} />);
    wrapper.setState({
      form: {
        title: 'am an article',
        catId: 8,
        tags: 'am,article,still',
        body: 'I thougth I said am an articledcxagscxgascgxas  bvcdgdcgavsdgxavsgxvagsvdxgasvxgasvgx ',
        description: 'is just a simple description',
        images: null,
      },
      pictures: [],
      categories: [],
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn(), target: { } });
  });

  it('cdgascdgacdgs', () => {
    const wrapper = shallow(
      <CreateArticle
        {...{ ...props, newArticle: jest.fn(() => Promise.resolve({ status: 400 })) }}
      />,
    );
    wrapper.setState({
      form: {
        title: 'am an article',
        catId: 8,
        tags: 'am,article,still',
        body: 'I thougth I said am an articledcxagscxgascgxas  bvcdgdcgavsdgxavsgxvagsvdxgasvxgasvgx ',
        description: 'is just a simple description',
        images: null,
      },
      pictures: [],
      categories: [],
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn(), target: { } });
  });
});
