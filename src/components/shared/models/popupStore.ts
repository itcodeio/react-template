import { makeAutoObservable } from 'mobx';

class PopupStore {
  name = '';
  isOpenPopup = false;

  constructor() {
    makeAutoObservable(this);
  }

  openPopup = (name: string) => {
    this.name = name;
    this.isOpenPopup = true;
  };

  closePopup = () => {
    this.name = '';
    this.isOpenPopup = false;
  };
}

// export const store = new Store()
export default new PopupStore();
