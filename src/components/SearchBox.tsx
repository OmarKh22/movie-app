"use client";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchWord}`);
  };
  return (
    <form
      className=" mt-4 flex justify-between px-5 max-w-6xl mx-auto items-center border-amber-400 border rounded-lg"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search keywords...."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent "
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-500"
        disabled={searchWord === ""}>
        Search
      </button>
    </form>
  );
}
