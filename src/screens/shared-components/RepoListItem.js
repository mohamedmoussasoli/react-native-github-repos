import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import {Card, Button} from '../../ui-components';
import {connect} from 'react-redux';
import {repoToggleFavortie, repoDelete} from '../../store/actions';
import {withNavigation} from 'react-navigation';

class RepoListItem extends Component {

    constructor (props) {

        super(props);

        this.state = {
            opacity: new Animated.Value(1)
        }

    }

    render () {

        let {item} = this.props;

        return (
    
            <Animated.View style={{opacity: this.state.opacity}}>

                <Card containerStyle={{left: this.state.left}}>
                    
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{marginRight: 10}}>

                            <Image 
                                style={styles.repoAvatar}
                                source={{uri: item.owner.avatar_url}}
                            />

                        </View>

                        <View style={{flex: 1}}>

                            <Text style={{fontSize: 18}}>
                                {item.full_name}
                            </Text>

                            <Text numberOfLines={2}>
                                {item.description}
                            </Text>

                        </View>

                    </View>

                    <View style={styles.buttonsContainer}>

                        <Button 
                            style={styles.button} 
                            color={'green'}
                            onPress={() => this.props.navigation.navigate('RepoView', { repo: item })}   
                        >
                            View
                        </Button>

                        <Button 
                            style={styles.button} 
                            color={'blue'} 
                            onPress={this.toggleFavorite.bind(this)}
                        >
                            {item.isFavorite ? 'Un Favorite' : 'Favorite'}
                        </Button>

                        <Button 
                            style={styles.button} 
                            color={'red'}
                            onPress={this.delete.bind(this)}
                        >
                            Delete
                        </Button>

                    </View>

                </Card>
                                
            </Animated.View>
    
        );

    }

    toggleFavorite () {

        let {item, repoToggleFavortie} = this.props;

        repoToggleFavortie(item.id, !item.isFavorite);

    }

    delete () {

        Animated.timing(this.state.opacity, {
            duration: 2000,
            toValue: 0
        }).start(() => {

            let {item, repoDelete} = this.props;
            repoDelete(item.id);

        });

    }

}

const styles = StyleSheet.create({
    
    repoAvatar: {
        width: 80,
        height: 80
    },

    buttonsContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button : {
        borderRadius: 5,
        elevation: 3
    }

});

const mapStateToProps = () => ({});

const mapDipatchToProps = (dispatch) => {

	return {
        repoToggleFavortie: (repoId, favorite) => dispatch(repoToggleFavortie(repoId, favorite)),
        repoDelete: (repoId) => dispatch(repoDelete(repoId))
	};

}

export default connect(mapStateToProps, mapDipatchToProps)(withNavigation(RepoListItem)) ;