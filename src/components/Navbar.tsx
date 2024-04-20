import { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <Suspense>
      <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-xl justify-center gap-12">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
