import React from 'react'

type ResultsType = {
    results : any
    res : any 
}

export default function Results({ results } : ResultsType ) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((res : any)  => (
        <h1>{res.original_title}</h1>
      ))}
    </div>
  );
}