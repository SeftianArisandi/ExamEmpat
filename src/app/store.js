import { combineReducers, createStore} from 'redux';

import myData from '../features/reduceHome';
import resumeEdu from '../features/resumeEdu';
import resumeWorkEx from '../features/resumeWorkEx';

let rootReducers = combineReducers({
    myData,
    resumeEdu,
    resumeWorkEx
});

let store = createStore(rootReducers);

export default store;