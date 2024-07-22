import getMovieCredits from "@/components/movies/getMovieCredits";
import styles from "@/styles/credits.module.css";

export default async function ({ params }: { params: { id: string } }) {
  const { id } = params;
  const credits = await getMovieCredits(id);

  return (
    <div className={styles.container}>
      <div className={styles.creditList}>
        {credits.map((credit: any) => (
          <div key={credit.id} className={styles.credit}>
            <img
              src={credit.profile_path}
              alt={credit.name}
              className={styles.creditImage}
            />
            <div className={styles.creditInfo}>
              <p>name: {credit.name}</p>
              <p>original_name: {credit.original_name}</p>
              <p>character: {credit.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
