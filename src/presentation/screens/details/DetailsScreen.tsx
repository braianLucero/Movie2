import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movies/movie/MovieHeader';
interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie} = useMovie(movieId);
  // const {movieId} = useRoute().params;

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
    </View>
  );
};
