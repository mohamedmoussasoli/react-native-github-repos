import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {RepoList} from '../shared-components';
import {Button} from '../../ui-components';
import {connect} from 'react-redux';
import {repoFetch} from '../../store/actions';
import _ from 'lodash';

class HomeScreen extends Component {

	static navigationOptions = ({navigation}) => {

		return {
			title: 'Repos Search'
		}

	}

	render() {

		let {repos, fetchingRepos} = this.props.repo;

		return (

			<View style={styles.container}>

				<View style={styles.textInputContainer}>

					<TextInput 
						style={styles.textInput}
						placeholder={'Search for repos...'}
						underlineColorAndroid={'transparent'}
						onChangeText={_.debounce(this.search.bind(this), 200)}
					/>

				</View>

				{
					fetchingRepos &&
					<View style={{marginVertical: 20}}>
						<ActivityIndicator size={'large'} />
					</View>
				}	

				<View style={{flex: 1}}>

					{this.renderRepos()}

				</View>

				{
					repos.length > 0 && !fetchingRepos &&
					<Button
						onPress={() => {
							this.props.navigation.navigate('FavoritesRepos');
						}}
					>
						View Favorite Repos
					</Button>
				}

			</View>

		);

	}

	renderRepos () {

		let {repos, fetchingRepos} = this.props.repo;

		if (repos.length > 0 && !fetchingRepos) {

			return (

				<RepoList repos={repos} />

			);

		}else{

			if (!fetchingRepos) {

				return (

					<Text style={styles.noResultsText}>
						No results!
					</Text>
	
				);

			}

			return null;

		}

	}

	search (query) {

		if (query == '') {
			return ;
		}

		this.props.repoFetch(query);

	}

}

const styles = StyleSheet.create({

	container: {
		flex: 1
	},

	textInputContainer: {
		backgroundColor: '#eee',
		padding: 10
	},

	textInput: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#b9b4b4',
		paddingVertical: 5,
		paddingLeft: 10
	},

	noResultsText : {
		fontSize: 20,
		textAlign: 'center'
	}

});

const mapStateToProps = ({repo}) => {

	return {repo};

}

const mapDipatchToProps = (dispatch) => {

	return {
		repoFetch: (query) => dispatch(repoFetch(query))
	};

}

export default connect(mapStateToProps, mapDipatchToProps)(HomeScreen);

