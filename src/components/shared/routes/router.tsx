import HomePage from '../../pages/HomePage';
import TablePage from '../../pages/TablePage';
import ChartsPage from '../../pages/ChartsPage';
import FormsPage from '../../pages/FormsPage';
import StorePage from '../../pages/StorePage';
import QueryPage from '../../pages/QueryPage';
import NotFoundPage from '../../pages/NotFoundPage';
import LoginPage from '../../pages/LoginPage';

export const routerMainConfig = [
  { name: 'Home', path: '/', element: <HomePage /> },

  { name: 'Table', path: '/table', element: <TablePage /> },
  {
    name: 'Charts',
    path: '/charts',
    // loader: rootLoader,
    element: <ChartsPage />,
  },
  {
    name: 'Forms',
    path: '/forms',
    // loader: rootLoader,
    element: <FormsPage />,
  },
  {
    name: 'Store',
    path: '/store',
    // loader: rootLoader,
    element: <StorePage />,
  },
  {
    name: 'Query',
    path: '/query',
    // loader: rootLoader,
    element: <QueryPage />,
  },
];

export const routerExtraConfig = [
  { name: 'Login', path: '/login', element: <LoginPage /> },
  {
    name: 'Not Found',
    path: '*',
    element: <NotFoundPage />,
  },
];
