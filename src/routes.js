import isAuth from './utils/isAuth';
import AppContainer from './AppContainer';
import AuthContainer from './scenes/Login/';
import LogoutContainer from './scenes/Logout/';
import RegisterContainer from './scenes/Register/';
import CvContainer from './Containers/Header/CvContainer';
import CvProfileContainer from './scenes/Profile/';
import CvSearchContainer from './scenes/Search/';
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
      components: { content: AuthContainer},
    },
    {
      path: '/logout',
      components: { content: LogoutContainer},
    },
    {
      path: '/register',
      onEnter: isAuth,
      components: { content: RegisterContainer},
    },
    {
      path: '/cv',
      components: { content: CvContainer },
      indexRoute: { components: { content: CvProfileContainer } },
      childRoutes: [
        { path: '/profile', components: { content: CvProfileContainer } },
        { path: '/search', components: { content: CvSearchContainer } },
       // { path: '/admin', components: { content: CvAdminContainer } }
        
      ]
    }
  ]
};
