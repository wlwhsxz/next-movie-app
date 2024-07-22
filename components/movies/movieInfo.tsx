import { API_URL } from "@/app/(home)/page";
import Link from "next/link";
import getMovie from "@/components/movies/getMovie";
import styles from "@/styles/movieInfo.module.css";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <h2 className={styles.tagline}>{movie.tagline}</h2>
        <p>{movie.overview}</p>
        <Link href={`/movies/${id}/production`}>Production →</Link>
        <Link href={`/movies/${id}/credits`}>Credits →</Link>
      </div>
    </div>
  );
}
