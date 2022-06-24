import Header from "./components/Header";
import Hero from "./components/Hero";
import { CodeIcon } from "@heroicons/react/outline";
import Card from "./components/Card";
import datas from "./service/data.json";

function App() {
  return (
    <div>
      <Header />
      <Hero
        Icon={CodeIcon}
        title="Think, Code, Debug"
        description="My Name is Fuad"
      />
      <main className="h-screen bg-gray-100 dark:bg-gray-600">
        <section className="px-3 md:px-12 py-6 ">
          <h1 className="my-5 font-bold text-gray-700 text-xl dark:text-gray-50">
            Project
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {datas.map((data, index) => (
              <Card
                key={index}
                img={data.image}
                title={data.title}
                meta={data.meta}
                description={data.description}
                tech={data.tech}
                github={data.github}
                link={data.link}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
