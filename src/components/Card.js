export default function Card({
  img,
  title,
  meta,
  description,
  github,
  link,
  tech,
}) {
  return (
    <div className="lg:w-72 md:w-64 md:h-auto rounded-md bg-white dark:bg-gray-700 whitespace-pre-line w-full">
      <div className="w-full  overflow-hidden rounded-t-md">
        <img src={img} alt="object-cover rounded-t-md h-64" />
      </div>
      <div className="p-2 flex flex-col">
        <h1 className="text-gray-700 dark:text-gray-100 text-lg truncate font-bold">
          {title}
        </h1>
        <h3 className="text-gray-700 dark:text-gray-100  text-sm">{meta}</h3>
        <p className="py-2 dark:text-gray-50 ">{description}</p>
        <p className="text-gray-700 dark:text-gray-100  font-semibold">
          {tech}
        </p>
        <div className="my-auto flex items-center justify-between">
          <a href={github} target="_blank" className="btn">
            Github
          </a>
          <a href={link} target="_blank" className="btn">
            View
          </a>
        </div>
      </div>
    </div>
  );
}
