import { API_URL } from "@/app/(home)/page";
import styles from "@/styles/movieVideos.module.css";

interface MovieVideosProps {
  id: string;
}

const fetchVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  if (!response.ok) {
    throw new Error(`Failed to fetch videos: ${response.statusText}`);
  }
  return response.json();
};

export default async function MovieVideos({ id }: MovieVideosProps) {
  try {
    const json = await fetchVideos(id);
    // const randomVideos = json.sort(() => 0.5 - Math.random());

    return (
      <div className={styles.container}>
        {json.map((video: any) => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    return <div>Error fetching videos</div>;
  }
}
