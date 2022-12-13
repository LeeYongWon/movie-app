import { useEffect, useState } from "react";

const App = () => {
  const [movieArr, setMovieArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoive = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.3&sort_by=year"
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
          movieArr.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} alt="" />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((genre, idx) => (
                    <li key={idx}>{genre}</li>
                  ))}
                </ul>
                <hr/>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default App;
