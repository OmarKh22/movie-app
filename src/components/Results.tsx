import React from "react";
import Card from "./Card";

type ResultsType = {
  results: any;
  res?: any;
};

export default function Results({ results }: ResultsType) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1500px] mx-auto py-4">
      {results.map((res: any) => (
        <Card key={res.id} result={res} />
      ))}
    </div>
  );
}
