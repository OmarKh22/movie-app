import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

type searchParamsType = {
    searchParams : any  
}

export default async function Home({searchParams} : searchParamsType) {
   const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}`,
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const results = data.results;
  // console.log(results.original_title);
  return (
    <div>
      <Results results={results} res={res} />
    </div>
  );
}
