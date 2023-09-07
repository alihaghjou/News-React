import { useNews } from "../utils/getData";
import MainPageDisplay from "../Components/MainPageDisplay";

export default function MainPage() {
  const { data, error, isLoading } = useNews();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>{error.message}</div>;
  return <MainPageDisplay data={data} />;
}
