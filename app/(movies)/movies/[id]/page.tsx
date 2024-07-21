import getMovie from "@/components/movies/getMovie";
import MovieInfo from "@/components/movies/movieInfo";
import MovieVideos from "@/components/movies/movieVideos";
import { Suspense } from "react";

export interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetails({ params: { id } }: Params) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
