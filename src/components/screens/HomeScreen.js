import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MovieListAndSorting from '../lists/MovieList';
import TvListAndSorting from '../lists/TvShowListAndSorting';
import SearchScreen from './SearchScreen';

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'movies', title: 'Movies' },
    { key: 'search', title: 'Search Results' },
    { key: 'tvShows', title: 'TV Shows' },
  ]);

  const renderScene = SceneMap({
    movies: () => <MovieListAndSorting navigation={navigation} />,
    search: () => <SearchScreen navigation={navigation} />,
    tvShows: () => <TvListAndSorting navigation={navigation} />,
  });

  const renderTabBar = (props) => (
    <TabBar
      activeColor='black'
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'grey', textTransform: 'none', fontWeight: 'bold' }} />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

export default HomeScreen;