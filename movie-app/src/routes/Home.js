import { useState, useEffect } from 'react';
import Movie from '../component/Movie';
const Home = () =>{
    const [movieArr, setMovieArr] = useState([]);

    const [loading, setLoading] = useState(true);
  
    const getMoive = async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await response.json();
      setMovieArr(json.data.movies);
      setLoading(false);
      console.log(json.data.movies);
    };
    useEffect(() => {
      /**
  then을 사용하기보다는 async-await를 사용해야한다
  fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then((res) => res.json())
      .then((json) => {
      setMovieArr(json.data.movies);
      setLoading(false);
      });
  */
      getMoive();
    }, []);
  
    return (
      <div>
        <ul>
          {loading ? (
            <strong>Loading....</strong>
          ) : (
            <div>
              {movieArr.map((movie) => {
                return(
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />)
              })}
            </div>
          )}
        </ul>
      </div>
    );

}

export default Home