import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // const {movieId} = useRoute().params;
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};
