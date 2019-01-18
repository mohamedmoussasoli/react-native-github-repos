import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class RepoViewScreen extends Component {

	static navigationOptions = ({navigation}) => {

		return {
			title: navigation.getParam('repo').full_name
		}

	}

    render() {

        let repo = this.props.navigation.getParam('repo');

        console.log(repo);

     	return (

			<View style={{flex: 1}}>

                <View style={{marginVertical: 10}}>
                
                    <Text style={styles.heading}>
                        {repo.full_name}
                    </Text>

                    <Text style={styles.ownerName}>
                        by {repo.owner.login}
                    </Text>

                    <View style={styles.ownerAvatarContainer}>
                        <Image 
                            style={styles.ownerAvatar}
                            source={{uri: repo.owner.avatar_url}}
                        />
                    </View>

                    <Text>
                        And rest of the data...
                    </Text>

                </View>

			</View>

		);

	}
	
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20 ,
        color: 'blue',
        textAlign: 'center'
    },
    ownerName: {
        fontSize: 15 ,
        textAlign: 'center'
    },
    ownerAvatarContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    ownerAvatar: {
        width: 120,
        height: 120
    }
});

