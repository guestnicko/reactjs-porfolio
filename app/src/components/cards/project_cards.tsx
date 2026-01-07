import { BG_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from "~/src/utils/constants";
type ProjectCardsProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  role: string;
  category: string;
};

export default function ProjectCards({
  id,
  title,
  imageUrl,
  description,
  date,
  category,
  role,
}: ProjectCardsProps) {
  return (
    <>
      {" "}
      <article
        key={id}
        className="flex flex-col overflow-hidden rounded-2xl transition shadow-2xl hover:shadow-orange-400 hover:border-orange-300 border-2 border-white bg-white"
      >
        <div className="relative h-50 sm:h-100 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col px-4 sm:px-5 py-4 space-y-3">
          <h3 className="text-lg tracking-wider font-bold">{title}</h3>
          <span className="rounded-full bg-orange-200 px-3   py-2 w-fit text-xs">
            {category}
          </span>
          <p className="text-md">{description}</p>
        </div>
        <div className="flex items-center justify-between  px-4 sm:px-5 py-3 text-sm">
          <span className="font-semibold">{date}</span>
          <button className="rounded-md bg-orange-400 px-3 py-2 text-lg text-white">
            View Project
          </button>
        </div>
      </article>
    </>
  );
}
