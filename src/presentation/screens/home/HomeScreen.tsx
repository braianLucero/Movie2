import React from 'react';
import {useMovies} from '../../hooks/useMovies';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';

export const HomeScreen = () => {
  // const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying} = useMovies();

  if (isLoading) {
    return <Text>Cargando..</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: 10, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};
