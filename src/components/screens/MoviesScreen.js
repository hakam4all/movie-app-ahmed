import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SingleCard from '../listItems/SingleCard'
import Form from '../forms/Form'
import React, { useState } from 'react';
import { getMovies } from '../../services/api';


const MoviesScreen = () => {

  const [movies, setMovies] = useState([]);

  const handleDropdownChange = async (itemValue) => {
    try {
      console.log('attemp from MovieScreen');
      const moviesData = await getMovies (itemValue);
    } catch (error) {
      console.log('error from MovieSCreen ', error);
    }
  };

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StatusBar style='#2c3e50' />
        <Form onDropdownChange={handleDropdownChange} />
        <SingleCard />
      </GluestackUIProvider>
    </SafeAreaProvider>
  )

};

export default MoviesScreen;
