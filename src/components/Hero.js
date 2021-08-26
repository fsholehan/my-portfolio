export default function Hero({ Icon, title, description }) {
  return (
    <section className="w-full text-center py-12 space-y-5 bg-white">
      <Icon className="h-32 mx-auto" />
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-700 font-medium">{description}</p>
    </section>
  );
}
