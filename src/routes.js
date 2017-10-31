import isAuth from './utils/isAuth';

import AppContainer from './AppContainer';
import AuthContainer from './AuthContainer';
import SignUpContainer from './SignUpContainer';
import CvContainer from './CvContainer';
import CvEditContainer from './CvEditContainer';
import CvViewContainer from './CvViewContainer';
import CvSearchContainer from './CvSearchContainer';
import HeaderComponent from './HeaderComponent';
//import CvAdminContainer from './CvAdminContainer';


export const Routes = {
  path: '/',
  component: AppContainer,
  onEnter: isAuth,
  indexRoute: { components: { content: CvContainer } },
  childRoutes: [
    {
      path: '/login',
      onEnter: isAuth,
      components: { header: HeaderComponent, content: AuthContainer },
    },
    {
      path: '/signUp',
      onEnter: isAuth,
      components: { header: HeaderComponent, content: SignUpContainer },
    },
    {
      path: '/cv',
      components: { content: CvContainer },
      indexRoute: { components: { content: CvViewContainer } },
      childRoutes: [
        { path: '/edit', components: { content: CvEditContainer } },
        { path: '/view', components: { content: CvViewContainer } },
        { path: '/search', components: { content: CvSearchContainer } },
       // { path: '/admin', components: { content: CvAdminContainer } }
        
      ]
    }
  ]
};
