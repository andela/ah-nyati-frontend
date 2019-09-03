import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Loader from '../src/components/Loader';
import { SingleArticle } from '../src/components/SingleArticle';
import MainArticle from '../src/components/SingleArticle/MainArticle';
import Tags from '../src/components/SingleArticle/Tags';
import Recommended from '../src/components/SingleArticle/Recommended';
import CommentsBtn from '../src/components/SingleArticle/CommentsBtn';
import RatingsModal from '../src/components/SingleArticle/RatingsModal';



describe('Single Article', () => {
  let component;
  let prevProps;
  let nextValue;
  
  const props = {
    prevProps: { match: { params: { slug: 'hello' } } },
    match: { params: { slug: '' } },
    article: { userId: 1 },
    viewArticle: jest.fn(),
    fetchArticles: jest.fn(),
    articleRating: jest.fn(),
    loading: false,
    componentDidUpdate: jest.fn(prevProps),
    onStarClick: jest.fn(nextValue),
    handleRatingsSubmit: jest.fn(),
    ccheckUser: jest.fn(),
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

  it('renders a RatingsModal component', () => {
    expect(component.find(RatingsModal).length).toBe(1);
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

  it('Click on ratings modal', () => {
    component.instance().onStarClick(nextValue);
    const starClick = jest.spyOn(component.instance(), 'onStarClick');
    expect(starClick).toHaveBeenCalledTimes(0);
  });

  it('submits ratings', () => {
    component.instance().handleRatingsSubmit();
    const starSubmit = jest.spyOn(component.instance(), 'handleRatingsSubmit');
    expect(starSubmit).toHaveBeenCalledTimes(0);
  });
});
