import { articleType } from "./App";

export default function MainPageDisplay({ data }: {data: articleType[]}) {
  return (
    <>
      {data?.map((article, i) => (
        <article key={i}>{article.title}</article>
      ))}
    </>
  );
}
