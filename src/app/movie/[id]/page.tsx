import Image from 'next/image';

type movieType = {
    params : any
}

export default async function MoviePage({ params } : movieType) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className='w-full pt-10'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
        alt='poster img'
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg pt-5'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>
        <div className='p-2'>
          <h2 className='text-2xl mb-2 font-bold text-orange-400'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1 text-orange-400'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1 text-orange-400'>Rating:</span>
            {Math.round(movie.vote_average * 10) / 10}
          </p>
        </div>
      </div>
    </div>
  );
}