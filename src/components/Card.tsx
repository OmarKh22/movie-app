import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FiThumbsUp } from "react-icons/fi";
import { IoIosStarOutline } from "react-icons/io";

type CardTypeProps = {
  result: {
    id: string;
    poster_path?: string;
    backdrop_path?: string;
    overview: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: string;
    vote_average: number;
    Icon: IconType;
    Math: string;
    round: any;
  };
};

export default function Card({ result }: CardTypeProps) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 p-3">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="poster image"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 object-cover max-h-[160px]"
        />
        <div className="pl-2 mt-3 space-y-2">
          <h2 className="text-lg font-bold line-clamp-1">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <div className=" flex items-center justify-center bg-orange-400 px-5 rounded-3xl w-6 h-6 text-xs pr-10 pl-10 gap-2">
            <p className="text-xl">
              {" "}
              <IoIosStarOutline />
            </p>
            <p>{Math.round(result.vote_average * 10) / 10}</p>
            {/* <FiThumbsUp className="h-5 mr-1 ml-3" /> */}
            {/* {result.vote_count} */}
          </div>
        </div>
      </Link>
    </div>
  );
}
