import React, { useLayoutEffect, useEffect, useState } from 'react';
import { HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { useRoute } from '@react-navigation/native';
import { findItembyID } from '../../services/api';
import { ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoreDetails = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;
  const { type } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        console.log(type)
        const fetchedItems = await findItembyID(id, type);
        setItem(fetchedItems);
        console.log(fetchedItems)

      } catch (error) {
        console.error('Error fetching item:', error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  useLayoutEffect(() => {
    if (item) {
      navigation.setOptions({
        headerTitle: item.title || item.name,

        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <HStack alignItems='center' paddingLeft={10}>
            <Ionicons
              name="arrow-back"
              size={24}
              onPress={() => navigation.goBack()}
              style={{ color: '#3FBDD2' }}
            />
            <Text
              onPress={() => navigation.goBack()}
              style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10, color: '#3FBDD2', marginRight: 10 }}
            >
              Back to list
            </Text>
          </HStack>
        ),
      });
    }
  }, [navigation, item]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView>
      <VStack alignItems='center' gap={20}>
        <Text> </Text>
        <VStack gap={25} alignItems='center' >
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
            {item.title ? item.title : item.name}
          </Text>

          <Image
            size="2xl"
            alt="movie Image"
            borderRadius="$lg"
            style={styles.imageStyle}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
          />
          <Text p={20}>{item.overview || 'No overview available'}</Text>
          <HStack gap={6}>
            <Text>Popularity: {item.popularity}</Text>
            <Text>|  Release Date: {item.release_date || item.first_air_date
            }</Text>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  imageStyle: {
    objectFit: 'contain'
  }
})

export default MoreDetails;
