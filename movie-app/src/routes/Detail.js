import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  const getMoive = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    // console.log(json.data.movie);
    setMovies(json.data.movie);
    setLoading(false);
    console.log(movies)
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
        {loading?'loading':(<div>
            <h2>{`${movies.title}'s Detail`}</h2>
            <img src={movies.medium_cover_image}/>
            <h3>{`Rating : ${movies.rating}`}</h3>
            <h3>{`Runtime : ${movies.runtime}`}</h3>
            <ul>
                {movies.genres.map((gen,idx)=><li key={idx}>{gen}</li>)}
            </ul>
            <hr/>
            <p>{movies.description_full}</p>
        </div>)}
    </div>
    
    
    
   
  );
};

export default Detail;
