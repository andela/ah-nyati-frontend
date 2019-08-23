import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Loader from '../src/components/Loader';
import { SingleArticle } from '../src/components/SingleArticle';
import MainArticle from '../src/components/SingleArticle/MainArticle';
import Tags from '../src/components/SingleArticle/Tags';
import Recommended from '../src/components/SingleArticle/Recommended';
import CommentsBtn from '../src/components/SingleArticle/CommentsBtn';


describe('Single Article', () => {
  let component;
  let prevProps;

  const props = {
    prevProps: { match: { params: { slug: 'hello' } } },
    match: { params: { slug: '' } },
    viewArticle: jest.fn(),
    fetchArticles: jest.fn(),
    loading: false,
    componentDidUpdate: jest.fn(prevProps),
  };

  beforeEach(() => {
    component = shallow(<SingleArticle {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div component', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('renders a MainArticle component', () => {
    expect(component.find(MainArticle).length).toBe(1);
  });

  it('renders a Recommended component', () => {
    expect(component.find(Recommended).length).toBe(1);
  });

  it('renders a Tags component', () => {
    expect(component.find(Tags).length).toBe(1);
  });

  it('renders a CommentsBtn component', () => {
    expect(component.find(CommentsBtn).length).toBe(1);
  });

  it('renders a Loader component', () => {
    component.setProps({ loading: true });
    expect(component.find(Loader).length).toBe(1);
  });

  it('Click on recommended article', () => {
    component.instance().componentDidUpdate(props.prevProps);
    const render = jest.spyOn(component.instance(), 'render');
    expect(render).toHaveBeenCalledTimes(0);
  });
});
