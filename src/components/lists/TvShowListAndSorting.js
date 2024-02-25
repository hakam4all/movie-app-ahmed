import React, { useState, useEffect } from "react";
import {  Text,  VStack} from "@gluestack-ui/themed";
import SingleCard from '../listItems/SingleCard'; 
import { getTvShows } from "../../services/api";
import SortDropDown from "../forms/SortDropDown";
import { ScrollView } from "react-native";

const TvListAndSorting = ({ navigation }) => {
  const [sortBy, setSortBy] = useState("popular");
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        setLoading(true);
        const fetchedTvShows = await getTvShows(sortBy);
        setTvShows(fetchedTvShows.results);
      } catch (error) {
        console.error("Error fetching Tv Show");
      } finally {
        setLoading(false);
      }
    };

    fetchTvShows();
  }, [sortBy]);

  const handleSelectChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const sortingOptions = [
    { label: 'airing _today', value: 'airing_today' },
    { label: 'on_the_air', value: 'on_the_air' },
    { label: 'popular', value: 'popular' },
    { label: 'top_rated', value: 'top_rated' },
  ];

  return (
    <VStack space="md">
      <SortDropDown onValueChange={handleSelectChange} options={sortingOptions} />

      {loading ? (
        <Text>Loading TV shows...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : tvShows && tvShows.length > 0 ? (
        <ScrollView>
        <VStack space="md">
          {tvShows.map((tvShow) => (
            <SingleCard key={tvShow.id} id={tvShow.id} object={tvShow} type="tv" navigation={navigation} />
          ))}
        </VStack>
        </ScrollView>
      ) : (
        <Text>No TV shows found.</Text>
      )}
    </VStack>
  );
};

export default TvListAndSorting;