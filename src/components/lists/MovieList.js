import React, { useState, useEffect } from 'react';
import { Text, VStack } from '@gluestack-ui/themed';
import SingleCard from '../listItems/SingleCard';
import { getMovies } from '../../services/api';
import SortDropDown from '../forms/SortDropDown';
import { ScrollView, StyleSheet } from 'react-native';

const MovieListWithSorting = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('popular');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await getMovies(sortBy);
        setMovies(fetchedMovies.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [sortBy]);

  const handleSelectChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const sortingOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <VStack space="2xl">
      <SortDropDown onValueChange={handleSelectChange} options={sortingOptions} />

      
      {loading ? (
        <Text>Loading movies...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : movies && movies.length > 0 ? (
        <ScrollView>
        <VStack space="md" style={styles.cardStyle}>
          {movies.map((movie) => (
            <SingleCard key={movie.id} id={movie.id} object={movie} type="movie" navigation={navigation} />
          ))}
        </VStack>
        </ScrollView>
      ) : (
        <Text>No movies found.</Text>
      )}
    </VStack>
  );
};


const styles = StyleSheet.create({
  cardStyle:{
    display:'flex',
    gap:35
  }


})

export default MovieListWithSorting;