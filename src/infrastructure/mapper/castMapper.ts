import {MovieDBCast} from '../interface/movie-db.responses';
import {Cast} from '../interface/movie-db.responses';

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'no character',
    };
  }
}
