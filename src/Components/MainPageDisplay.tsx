import { Link } from "react-router-dom";
import { articleType } from "../types";

export default function MainPageDisplay({ data }: { data: articleType[] }) {
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
