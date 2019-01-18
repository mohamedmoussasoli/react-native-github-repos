import {put, takeEvery} from 'redux-saga/effects'; 
import {FETCH_REPOS, SAVE_REPOS, FETCHING_REPOS} from './types';
import axios from 'axios';

export function* fetchReposWatcher () {

    yield takeEvery(FETCH_REPOS, fetchReposWorker);

}

function* fetchReposWorker (action) {

    let query = action.query.trim();

    if (query == '') {

        yield put ({ type: SAVE_REPOS, repos : [] });

        return false;

    }

    try {

        yield put ({ type: FETCHING_REPOS, fetching: true });

        let response = yield axios.get('https://api.github.com/search/repositories?sort=stars&order=desc', {
            params: {
                q: query
            }
        });
    
        let items = response.data.items;

        let repos = yield items.length > 0 ? items.map((repo) => {
            return {
                ...repo,
                isFavorite: false
            }
        }) : [];

        yield put ({ type: FETCHING_REPOS, fetching: false });
    
        yield put ({ type: SAVE_REPOS, repos });

    }catch (err) {

        yield put ({ type: FETCHING_REPOS, fetching: false });

    }

}



