import { makeAutoObservable } from 'mobx';

class QueryStore {
  constructor() {
    makeAutoObservable(this);
  }
}

// export const store = new Store()
export default new QueryStore();
