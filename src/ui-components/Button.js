import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = (props) => {

    return (

        <TouchableOpacity
            {...props}
            style={[
                styles.button,
                {
                    backgroundColor: props.color || 'red'
                },
                props.style
            ]}
        >
            <Text style={styles.text}>
                {props.children}
            </Text>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    text: {
        color: '#fff',
        textAlign: 'center'
    }

});