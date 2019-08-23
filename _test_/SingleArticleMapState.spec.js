import { mapStateToProps } from '../src/components/SingleArticle';

const state = {
  singleArticle: {},
  loading: false,
  recommendedArticles: {},
};

describe('mapStateToProps', () => {
  it('return the right object', () => {
    expect(mapStateToProps(state)).toBeDefined();
  });
});
