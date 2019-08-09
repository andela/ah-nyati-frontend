import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const makeMockStore = (state = {}) => (
  mockStore({
    ...state,
  })
);

export default makeMockStore;
