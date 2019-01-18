import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RepoList} from '../shared-components';
import {connect} from 'react-redux';

class FavoritesReposScreen extends Component {

	static navigationOptions = ({navigation}) => {

		return {
			title: 'Favorties Repos Screen'
		}

	}

    render() {

     	return (

			<View style={{flex: 1}}>

				{this.renderFavoriteRepos()}

			</View>

		);

	}

	renderFavoriteRepos () {

		let favortieRepos = this.props.repo.repos.filter(repo => repo.isFavorite);

		if (favortieRepos.length > 0) {

			return (

				<RepoList repos={favortieRepos} />

			);

		}

		return (
			<View style={{marginTop: 10}}>
				<Text style={{fontSize: 20, textAlign: 'center'}}>
					You have no favorite repos!
				</Text>
			</View>
		);

	}
	
}

const mapStateToProps = ({repo}) => {

	return {repo};

}

export default connect(mapStateToProps)(FavoritesReposScreen);

