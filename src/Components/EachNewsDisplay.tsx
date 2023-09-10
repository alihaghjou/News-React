import { articleType } from "../types";

export default function EachNewsDisplay({
  pageData,
}: {
  pageData: articleType;
}) {
  return (
    <main className="flex flex-col justify-center gap-3 mt-4 p-4">
      <h1 className="text-2xl font-semibold">{pageData.title}</h1>
      <h3 className="text-gray-300"><span className="font-semibold">Published At:</span> {pageData.publishedAt}</h3>
      <h3><span className="font-semibold">Source:</span> {pageData.source.name}</h3>
      <img src={pageData.urlToImage} alt="Image" />
      <p className="indent-2 text-lg">{pageData.description}</p>
    </main>
  );
}
