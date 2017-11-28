import isAuth from './utils/isAuth';
import AppContainer from './AppContainer';
import AuthContainer from './scenes/Login/';
import LogoutContainer from './scenes/Logout/';
import SignUpContainer from './scenes/Register/';
import CvContainer from './Containers/Header/CvContainer';
import CvEditContainer from './scenes/EditCV/';
import HomeContainer from './scenes/Home/';
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
      path: '/signUp',
      onEnter: isAuth,
      components: { content: SignUpContainer},
    },
    {
      path: '/cv',
      components: { content: CvContainer },
      indexRoute: { components: { content: HomeContainer } },
      childRoutes: [
        { path: '/edit', components: { content: CvEditContainer } },
        { path: '/view', components: { content: HomeContainer } },
        { path: '/search', components: { content: CvSearchContainer } },
       // { path: '/admin', components: { content: CvAdminContainer } }
        
      ]
    }
  ]
};
