import { API_URL } from "@/app/(home)/page";

export default async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`).then((res) => res.json());
  return response;
}
