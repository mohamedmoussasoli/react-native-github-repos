import {all} from 'redux-saga/effects';

import {fetchReposWatcher} from './modules/repo/sagas';

export default function* rootSaga() {
    yield all([
        fetchReposWatcher(),
    ]);
}