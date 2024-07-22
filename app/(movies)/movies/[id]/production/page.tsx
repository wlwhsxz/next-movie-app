import getMovie from "@/components/movies/getMovie";
import styles from "@/styles/production.module.css";

export default async function MovieProduction({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <div className={styles.companyList}>
        {movie.production_companies.map((company: any) => (
          <div key={company.id} className={styles.company}>
            <img
              src={company.logo_path}
              alt={company.name}
              className={styles.companyLogo}
            />
          </div>
        ))}
      </div>
      <div className={styles.movieInfo}>
        <p>release: {movie.release_date}</p>
        <p>budget: {movie.budget.toLocaleString()} $</p>
        <p>revenue: {movie.revenue.toLocaleString()} $</p>
        <p>added value: x {(movie.revenue / movie.budget).toFixed(1)}</p>
      </div>
    </div>
  );
}
