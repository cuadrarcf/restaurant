import App from './app/reducer';
import Auth from './auth/reducer';
import UserProfile from '../containers/UserProfile/reducers';
import ThemeSwitcher from './themeSwitcher/reducer';

function mergeReducers(newReducers) {
  return{
    Auth,
    App,
    ThemeSwitcher,
    UserProfile,
    ...newReducers
    // ...dropsReducers,
    // ...partnerPortalReducers,
    // ...budgetAnalysisToolReducers,
    // ...budgetApplicationReducers
  }
}

export default mergeReducers
