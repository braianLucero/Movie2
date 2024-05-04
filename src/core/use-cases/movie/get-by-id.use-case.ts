import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../infrastructure/interface/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mapper/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    const fullMovie = MovieMapper.formMovieDBToEntity(movie);

    return fullMovie;
  } catch (error) {
    throw new Error(`cannot get movie by id ${movieId}`);
  }
};
