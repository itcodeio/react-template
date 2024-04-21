import counterStore from './counterStore';
import popupStore from './popupStore';
import queryStore from './queryStore';

class RootStore {
  counterStore = counterStore;
  queryStore = queryStore;
  popupStore = popupStore;
}

export default RootStore;
