import React from 'react';
import {useMovies} from '../../hooks/useMovies';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoaders} from '../../components/loaders/FullScreenLoaders';

export const HomeScreen = () => {
  // const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoaders />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: 10, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={topRated} title="Mejor calificadas " />
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
