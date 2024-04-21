import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { routerMainConfig, routerExtraConfig } from './components/shared/routes/router';
import StoreProvider from './components/shared/models/RootStoreProvider';
import Popup from './components/shared/popups/popup';
import './index.css';

const router = createBrowserRouter([...routerMainConfig, ...routerExtraConfig]);

export default function App() {
  return (
    <StoreProvider>
      <Popup />
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
