import { useParams } from "react-router-dom";
import { useNews } from "../utils/getData";
import EachNewsDisplay from "../Components/EachNewsDisplay";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function EachNewsPage({filter}: {filter: string}) {
  const { data, isLoading, error } = useNews(filter);
  const { id } = useParams();
  
  if (isLoading) return <LoadingSpinner />;
  if (error || !data || !id) return <div>{error.message}</div>;
  const pageData = data[+id];
  return <EachNewsDisplay pageData={pageData} />;
}
