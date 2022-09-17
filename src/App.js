import Header from "./components/Header";
import Hero from "./components/Hero";
import { CodeIcon } from "@heroicons/react/outline";
import Card from "./components/Card";
import datas from "./service/data.json";
import { useState } from "react";

function App() {
  const [end, setEnd] = useState(4);

  const handleMore = () => {
    setEnd(end + 4);
  };

  return (
    <>
      <Header />
      <Hero
        Icon={CodeIcon}
        title="Think, Code, Debug"
        description="Holla, Fuad here... I am a frontend developer who loves code. Currently I'm working with React Js. You can see list of project I've created below."
      />
      <main className="h-screen bg-gray-100 dark:bg-gray-600">
        <section className="px-3 md:px-12 py-6 ">
          <h1 className="my-5 font-bold text-gray-700 text-xl dark:text-gray-50">
            Project
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {datas.slice(0, end).map((data, index) => (
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
          <button
            onClick={handleMore}
            className="text-white bg-blue-500 w-full md:w-1/3 text-center my-10 mx-auto block py-3 rounded-md text-xl"
          >
            More
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
