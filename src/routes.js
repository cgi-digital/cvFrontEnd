import isAuth from './utils/isAuth';

import AppContainer from './AppContainer';
// import AuthContainer from './AuthContainer';
import CvContainer from './CvContainer';
import CvEditContainer from './CvEditContainer';
import CvViewContainer from './CvViewContainer';
import HeaderComponent from './HeaderComponent';

export const Routes = {
  path: '/',
  component: AppContainer,
  // onEnter: isAuth,
  indexRoute: { components: { content: CvContainer } },
  childRoutes: [
    // {
    //   path: '/login',
    //   components: { header: HeaderComponent, content: AuthContainer },
    // },
    {
      path: '/cv',
      components: { content: CvContainer },
      indexRoute: { components: { content: CvViewContainer } },
      childRoutes: [
        { path: '/edit', components: { content: CvEditContainer } },
        { path: '/view', components: { content: CvViewContainer } }
      ]
    }
  ]
};
