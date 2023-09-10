import { useNews } from "../utils/getData";
import MainPageDisplay from "../Components/MainPageDisplay";
import LoadingSpinner from "../Components/LoadingSpinner";

type propsType = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
};

export default function MainPage({ filter, setFilter }: propsType) {
  const { data, error, isLoading } = useNews(filter);

  if (isLoading) return <LoadingSpinner />;
  if (error || !data) return <div>{error.message}</div>;
  return <MainPageDisplay data={data} setFilter={setFilter} filter={filter} />;
}
