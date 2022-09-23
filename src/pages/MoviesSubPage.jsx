import { useFetchMovie } from 'hooks/useFetchMovie';

export const MoviesSubPage = () => {
  const movie = useFetchMovie();
  console.log(movie);
  return (
    <main>
      <section>
        <button type="button">Go back</button>
        <img
          // src={movie}
          alt=""
          width="500px"
          height="auto"
          // src={`https://image.tmdb.org/t/p/w342/${
          //   poster_path === null
          //     ? 'h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
          //     : poster_path
          // }`}
          loading="lazy"
        />
        <h2>{movie.title}</h2>
        <p>User Score:</p>
        <h3>Overview</h3>
        <p></p>
        <h3>Genres</h3>
        <p></p>
      </section>
    </main>
  );
};
