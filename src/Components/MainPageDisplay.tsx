import { Link } from "react-router-dom";
import { articleType } from "../types";

type propsType = {
  data: articleType[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const filterBased = ["bitcoin", "apple", "playstation", "car", "xbox"];

export default function MainPageDisplay({ data, setFilter }: propsType) {
  return (
    <main>
      <h1 className="text-lg font-semibold text-center py-2">First 100 News</h1>
      <section className="flex p-3 flex-col-reverse lg:flex-row">
        <article className="flex flex-col gap-4 p-2 text-lg w-4/5 ">
          {data?.map((article, i) => (
            <article key={i}>
              <Link
                to={`/${i}`}
                className="transition-all line-clamp-2 text-white duration-200 hover:text-slate-700"
              >
                {article.title}
              </Link>
            </article>
          ))}
        </article>
        <section className="lg:w-1/5 h-full text-lg border-l text-center p-4 px-6 shadow-sm rounded">
          <p className="mb-3 text-red-300">Get Latest News Of:</p>
          <ul className="indent-4 flex flex-row gap-2 lg:flex-col justify-center">
            {filterBased.map((name) => (
              <li key={name}>
                <button
                  onClick={() => setFilter(name)}
                  className="capitalize hover:text-orange-300"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
