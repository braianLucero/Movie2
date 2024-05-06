import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrastructure/interface/movie-db.responses';
import {CastMapper} from '../../../infrastructure/mapper/castMapper';
import {Cast} from '../../entities/cast.etity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
    return actors;
  } catch (error) {
    throw new Error(`cannot get movie cast ${movieId}`);
  }
};
