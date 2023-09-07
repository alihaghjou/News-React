import axios from "axios";
import useSWR from "swr";
import { articleType } from "../types";

export function useNews() {
    return useSWR<articleType[]>(
      `https://newsapi.org/v2/everything?q=apple&apiKey=${
        import.meta.env.VITE_api_key
      }`,
      fetcher
    );
  }
  
  const fetcher = (url: string) =>
    axios.get(url).then((res) => res.data.articles);