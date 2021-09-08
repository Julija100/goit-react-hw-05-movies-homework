import { useParams } from 'react-router-dom';
import { BASE_URL_IMG } from '../../services/moviesApi';

export default function Cast({ castData }) {
    return (
      <ul>
        {castData.map((cast) => (
          <li key={cast.id}>
            <img
              src={`${BASE_URL_IMG}${cast.profile_path}`}
              alt={cast.name}
              width="250"
            />
                <p>{cast.name}</p>
                <p>{ cast.character}</p>
          </li>
        ))}
      </ul>
    );
}