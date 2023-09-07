import axios from "axios";
import { Route, Routes } from "react-router-dom";
import useSWR from "swr";
import MainPageDisplay from "./MainPageDisplay";
import Layout from "./Layout";
import EachData from "./EachData";

export type articleType = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export function useNews() {
  return useSWR<articleType[]>(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
      import.meta.env.VITE_api_key
    }`,
    fetcher
  );
}

const fetcher = (url: string) =>
  axios.get(url).then((res) => res.data.articles);

function App() {
  const { data, error, isLoading } = useNews();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>{error.message}</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPageDisplay data={data} />} />
        <Route path="/:id" element={<EachData />} />
        <Route path="/about" element={<div>About</div>} />
      </Route>
    </Routes>
  );
}

export default App;
