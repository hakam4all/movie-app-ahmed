import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from '@gluestack-ui/themed';
import { Picker } from '@react-native-picker/picker';

const Form = props => {
  const { onDropdownChange } = props;

  return (
    <VStack space={2} width="100%" p={5} my={10}>
      <Picker
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => onDropdownChange(itemValue)}
      >
        <Picker.Item label="Now Playing" value="now_playing" />
        <Picker.Item label="Popular" value="popular" />
        <Picker.Item label="Top Rated" value="top_rated" />
        <Picker.Item label="Upcoming" value="upcoming" />
      </Picker>
    </VStack>
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',

  },
});

export default Form;
