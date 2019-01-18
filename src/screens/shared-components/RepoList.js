import React from 'react';
import {FlatList} from 'react-native';
import RepoListItem from './RepoListItem';

export default RepoList = ({repos}) => {

    return (

        <FlatList 
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RepoListItem item={item} />}
        />

    );

}

