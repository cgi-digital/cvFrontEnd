import isAuth from './utils/isAuth';
import AppContainer from './AppContainer';
import SignInContainer from './scenes/SignIn';
import SignUpContainer from './scenes/SignUp';
import HeaderContainer from './containers/Header';
import CvEditContainer from './scenes/EditCV';
import HomeContainer from './scenes/Home';
import CvSearchContainer from './scenes/Search';
import HeaderComponent from './HeaderComponent';


export const Routes = {
  path: '/',
  component: AppContainer,
  onEnter: isAuth,
  indexRoute: { components: { content: HeaderContainer } },
  childRoutes: [
    {
      path: '/login',
      onEnter: isAuth,
      components: { content: SignInContainer },
    },
    {
      path: '/signUp',
      onEnter: isAuth,
      components: { content: SignUpContainer },
    },
    {
      path: '/cv',
      components: { content: HeaderContainer },
      indexRoute: { components: { content: HomeContainer } },
      childRoutes: [
        { path: '/edit', components: { content: CvEditContainer } },
        { path: '/Home', components: { content: HomeContainer } },
        { path: '/search', components: { content: CvSearchContainer } }
      ]
    }
  ]
};
