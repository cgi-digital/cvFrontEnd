import Store2 from 'store2';
import { replace } from 'react-router-redux';

export default function isAuth(nextState, replace) {
  // Looks in localstorage for token
  if (Store2.get('user:token')) {
    replace({
      pathname: 'cv/view',
      state: { nextPathname: nextState.location.pathname }
    });
  } else {
    Store2.clearAll();
  }
}
