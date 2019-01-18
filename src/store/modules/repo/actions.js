import {FETCH_REPOS, TOGGLE_FAVORITE_REPO, DELETE_REPO} from './types';

export const repoFetch = (query) => {

	return {
		type: FETCH_REPOS,
		query
	};

}

export const repoToggleFavortie = (repoId, favorite) => {

	return {
		type: TOGGLE_FAVORITE_REPO,
		repoId,
		favorite
	}

}

export const repoDelete = (repoId) => {

	return {
		type: DELETE_REPO,
		repoId
	}

}