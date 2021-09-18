export default function Hero({ Icon, title, description }) {
  return (
    <section className="w-full text-center py-12 space-y-5 bg-white dark:bg-gray-800 ">
      <Icon className="h-32 mx-auto dark:text-white" />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-50 font-medium">
        {description}
      </p>
    </section>
  );
}
