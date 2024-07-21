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
      <h1>Movie Production</h1>
      {movie.production_companies.map((company: any) => (
        <div>
          <p key={company.id}>{company.name}</p>
          <img src={company.logo_path} alt={company.name} />
          <p>{company.origin_country}</p>
        </div>
      ))}
      <br />
      <div>release: {movie.release_date}</div>
      <div>budget: {movie.budget.toLocaleString()} $</div>
      <div>revenue: {movie.revenue.toLocaleString()} $</div>
      <div>added value: x {(movie.revenue / movie.budget).toFixed(1)}</div>
    </div>
  );
}
