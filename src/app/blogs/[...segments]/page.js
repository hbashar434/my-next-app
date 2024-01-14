"use client";

import { useParams, useSearchParams } from "next/navigation";

const SomeBlogPage = ({ params, searchParams }) => {
  const [year, id] = params.segments;

  const params2 = useParams();
  const searchParams2 = useSearchParams();

  return (
    <div>
      SomeBlogPage {year} for {id}
      <p className="text-xl text-sky-600 line-through">{searchParams.title}</p>
    </div>
  );
};

export default SomeBlogPage;
