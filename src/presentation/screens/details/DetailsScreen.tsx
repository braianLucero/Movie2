import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movies/movie/MovieHeader';
import {MovieDetails} from '../../components/movies/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoaders} from '../../components/loaders/FullScreenLoaders';
interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie, cast} = useMovie(movieId);
  // const {movieId} = useRoute().params;

  if (isLoading) {
    return <FullScreenLoaders />;
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
