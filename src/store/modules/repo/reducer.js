import update from 'immutability-helper';
import {
    FETCHING_REPOS,
    TOGGLE_FAVORITE_REPO ,
    DELETE_REPO,
    SAVE_REPOS
} from './types';

const INITIAL_STATE = {
    repos: [],
    fetchingRepos: false,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SAVE_REPOS:

            return update(state, {
                repos: {
                    $set: action.repos
                }
            });

        case FETCHING_REPOS:

            return update(state, {
                fetchingRepos: {
                    $set: action.fetching
                }
            });

        case TOGGLE_FAVORITE_REPO:

            return update(state, {
                repos: {
                    [state.repos.findIndex(repo => repo.id == action.repoId)]: {
                        isFavorite: {
                            $set: action.favorite
                        }
                    }
                }
            });

        case DELETE_REPO:

            return update(state, {
                repos: {
                    $splice: [[state.repos.findIndex(repo => repo.id == action.repoId), 1]]
                }
            });

        default :

            return state;

    }

}