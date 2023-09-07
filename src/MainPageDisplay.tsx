import { Link } from "react-router-dom";
import { articleType } from "./App";

export default function MainPageDisplay({ data }: { data: articleType[] }) {
  console.log(data)
  return (
    <>
      {data?.map((article, i) => (
        <article key={i}>
          <Link to={`/${i}`}>{article.title}</Link>
        </article>
      ))}
    </>
  );
}
