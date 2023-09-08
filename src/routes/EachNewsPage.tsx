import { useParams } from "react-router-dom";
import { useNews } from "../utils/getData";

export default function EachNewsPage({filter}: {filter: string}) {
  const { data, isLoading, error } = useNews(filter);
  const { id } = useParams();
  
  if (isLoading) return <div>Loading...</div>;
  if (error || !data || !id) return <div>{error.message}</div>;
  const pageData = data[+id];
  return <div>{pageData.title}</div>;
}
