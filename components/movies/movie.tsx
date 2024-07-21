import Link from "next/link";
import styles from "@/styles/movie.module.css";

interface MovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  return (
    <Link href={`/movies/${id}`}>
      <div className={styles.movie}>
        {title}
        <img src={poster_path} alt={title} />
      </div>
    </Link>
  );
}
