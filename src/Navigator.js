import {createStackNavigator, createAppContainer} from 'react-navigation';

// screens
import HomeScreen from './screens/home/HomeScreen';
import FavoritesReposScreen from './screens/favorites-repos/FavoritesReposScreen';
import RepoViewScreen from './screens/repo-view/RepoViewScreen';

const Navigator = createStackNavigator({
    Home: HomeScreen,
    FavoritesRepos: FavoritesReposScreen,
    RepoView: RepoViewScreen
});

export default createAppContainer(Navigator);