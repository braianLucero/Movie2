import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../../../../core/entities/movie.entity';
interface Props {
  movie: FullMovie;
}
export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
        </View>
      </View>
    </>
  );
};
