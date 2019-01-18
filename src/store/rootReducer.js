import {combineReducers} from 'redux';

import repoReducer from './modules/repo/reducer';

export default combineReducers({
    repo: repoReducer
});