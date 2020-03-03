import {all} from 'redux-saga/effects';
import authSagas from '../redux/auth/saga';
import userProfileSagas from '../containers/UserProfile/sagas';


// TODO: improve this(dynamically)!!!
// import main sagas from each project.
// import dropsSagas from '../../../drops/src/sagas';
// import partnerPortalSagas from '../../../partner-portal/src/sagas/index';
// import budgetApplicationSagas from '../../../budget-application/src/sagas/index';
// import budgetAnalysisToolSagas from '../../../budget-analysis-tool/src/sagas/index';


export default function mergeSagas(newSagas) {

  const allSagasArray = [
    authSagas(),
    userProfileSagas(),
    ...newSagas
    // ...dropsSagas,
    // ...partnerPortalSagas,
    // ...budgetAnalysisToolSagas,
    // ...budgetApplicationSagas
  ];

  return  function* rootSaga(getState) {
    yield all(allSagasArray);
  }
}
