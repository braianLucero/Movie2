import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrastructure/interface/movie-db.responses';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
) => {
  try {
    const {} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
  } catch (error) {
    throw new Error(`cannot get movie cast ${movieId}`);
  }
};
