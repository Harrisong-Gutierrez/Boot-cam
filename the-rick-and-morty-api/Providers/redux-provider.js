import { Provider } from 'react-redux';
import { getStore } from '../redux/store';

const ReduxProvider = ({ children }) => {
  const store = getStore();

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
