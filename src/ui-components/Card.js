import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Card = (props) => {

    return (

        <View style={[
            styles.cardContainer,
            props.containerStyle
        ]}>

            <View 
                {...this.props}
                style={[
                    styles.card,
                    props.cardStyle
                ]}
            >
                {props.children}
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    cardContainer: {
        margin: 4
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 3,
        padding: 4
    }

});