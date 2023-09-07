import axios from "axios";
import useSWR from "swr";
import { articleType } from "../App";

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