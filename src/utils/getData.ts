import axios from "axios";
import useSWR from "swr";
import { articleType } from "../types";

function getDates() {
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const todayDate = new Date();
  function stringDate(date: Date) {
    return date.toISOString().split("T")[0];
  }
  const today = stringDate(todayDate);
  const yesterday = stringDate(yesterdayDate);
  return { today, yesterday };
}

export function useNews(filter = "apple") {
  const { today, yesterday } = getDates();
  const {data, isLoading, error}=useSWR<articleType[]>(
    `https://newsapi.org/v2/everything?q=${filter}&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=${
      import.meta.env.VITE_api_key
    }`,
    fetcher
  );
  const filteredData = data?.filter((item) => item.title !== "[Removed]")
  return {data: filteredData, isLoading, error}
  
}

const fetcher = (url: string) =>
  axios.get(url).then((res) => res.data.articles);
