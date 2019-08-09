import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UpdateArticle, mapDispatchToProps } from '../src/components/article/UpdateArticlePage';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const file = new File(['(⌐□_□)'], 'image-data.png', { type: 'image/*' });

const props = {
  newArticle: jest.fn(() => Promise.resolve(200)),
  editedArticle: jest.fn(() => Promise.resolve('this is an edited article...')),
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
  history: {
    push: jest.fn(),
    match: {
      params: {
        slug: 'my-career-7de36e1e',
      },
    },
  },
  match: {
    params: {
      slug: 'my-career-7de36e1e',
    },
  },
};

describe('Error', () => {
  let app;
  // let wrapper;

  const initialState = {};
  const store = mockStore(initialState);
  beforeEach(() => {
    window.localStorage.setItem('jwtToken', 'token');
    app = shallow(<UpdateArticle store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a section component', () => {
    const UpdateComponent = shallow(<UpdateArticle {...props} />);
    expect(UpdateComponent.find('section').length).toBe(1);
  });
  it('renders a Editor component', () => {
    expect(app.find('Editor').length).toBe(0);
  });
  it('renders a h4 component', () => {
    expect(app.find('h4').length).toBe(0);
  });
  it('renders a select component', () => {
    expect(app.find('select').length).toBe(0);
  });
  it('renders a button component', () => {
    expect(app.find('button').length).toBe(0);
  });

  it('renders a input component', () => {
    expect(app.find('input').length).toBe(0);
  });

  it('should set state when article an article field is entered', () => {
    const wrapper = shallow(<UpdateArticle {...props} />);
    const instance = wrapper.find('input[name="title"]');

    instance.simulate('change', { target: { name: 'title', value: 'This is a test article' } });
    expect(wrapper.state().form.title).toBe('This is a test article');
  });

  it('should show error when title is empty', () => {
    const wrapper = shallow(<UpdateArticle {...{ ...props, errors: { title: 'title is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' title is empty ');
  });

  it('should show error when body is empty', () => {
    const wrapper = shallow(<UpdateArticle {...{ ...props, errors: { body: 'body is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' body is empty ');
  });

  it('should show error when category is empty', () => {
    const wrapper = shallow(<UpdateArticle {...{ ...props, errors: { catId: 'category is empty' } }} />);
    expect(wrapper.find('.red').text()).toEqual(' category is empty ');
  });

  it('should set state when image file is uploaded', () => {
    const wrapper = shallow(<UpdateArticle {...props} />);
    const instance = wrapper.find('ReactImageUploadComponent[name="imageInput"]');

    instance.simulate('change', { target: { files: [file] } });
    expect(wrapper.state().images).toBeUndefined();
  });

  it('should set state when article body is entered', () => {
    const wrapper = shallow(<UpdateArticle {...props} />);
    const instance = wrapper.find('Editor[apiKey="z4ea4n1he2tp6mka3q7wwqy50yum2b7i8ub29o6qaoq6rlde"]');

    instance.simulate('change', { target: { getContent: jest.fn(() => 'This is a test article') } });
    expect(wrapper.state().form.body).toBe('This is a test article');
  });

  it('should redirect user if token is not set', () => {
    window.localStorage.setItem('jwtToken', '');
    const wrapper = shallow(<UpdateArticle {...props} />);
    expect(wrapper.props().history).toBe(undefined);
  });

  it('handle submit action', () => {
    const wrapper = shallow(<UpdateArticle {...props} />);
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

  it('should load all categories', () => {
    const lprops = {
      newArticle: jest.fn(() => Promise.resolve(200)),
      editedArticle: jest.fn(() => Promise.resolve('this is an edited article...')),
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
      history: {
        push: jest.fn(),
        match: {
          params: {
            slug: 'my-career-7de36e1e',
          },
        },
      },
      match: {
        params: {
          slug: 'my-career-7de36e1e',
        },
      },
    };
    const wrapper = shallow(<UpdateArticle {...lprops} />);
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(wrapper.state().form).toHaveProperty('catId');
  });

  it('handle isDraft action', () => {
    const wrapper = shallow(<UpdateArticle {...props} />);

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
    const wrapper = shallow(<UpdateArticle {...props} />);

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
    const wrapper = shallow(<UpdateArticle {...props} />);
    wrapper.setState({
      categories: [
        {
          id: 1,
          name: 'Technology',
        },
        {
          id: 2,
          name: 'Technology',
        },
      ],
    });

    expect(wrapper.find('option')).toHaveLength(2);
    expect(wrapper.find('option').at(1).text()).toEqual('Technology');
  });

  it('should test mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).allCategories();
    mapDispatchToProps(dispatch).editedArticle('my-career-7de36e1e', '{}');
  });
});
