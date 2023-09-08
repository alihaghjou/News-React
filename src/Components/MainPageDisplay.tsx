import { Link } from "react-router-dom";
import { articleType } from "../types";

type propsType = {
  data: articleType[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainPageDisplay({ data, setFilter }: propsType) {
  return (
    <main className="flex p-3">
      <section className="flex flex-col gap-4 p-2 text-lg w-4/5 ">
        {data?.map((article, i) => (
          <article key={i}>
            <Link
              to={`/${i}`}
              className="transition-all text-white duration-200 hover:text-slate-700"
            >
              {article.title}
            </Link>
          </article>
        ))}
      </section>
      <section className="w-1/5 text-lg fixed right-0 top-1/2 -translate-y-1/2 border-l p-4 px-6 shadow-sm rounded">
        <p className="mb-3">Get Latest News Of:</p>
        <ul className="indent-4 flex flex-col gap-2">
          <li>
            <button onClick={() => setFilter("bitcoin")}>Bitcoin</button>
          </li>
          <li>
            <button onClick={() => setFilter("apple")}>Apple</button>
          </li>
          <li>
            <button onClick={() => setFilter("playstation")}>
              Playstation
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("car")}>Car</button>
          </li>
        </ul>
      </section>
    </main>
  );
}
