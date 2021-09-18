import Header from "./components/Header";
import Hero from "./components/Hero";
import { CodeIcon } from "@heroicons/react/outline";
import Card from "./components/Card";

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
            <Card
              img="/images/tokped-clone.png"
              title="Tokopedia Clone"
              meta="Web resep terinspirasi tokopedia"
              description="Belum responsive masih desktop version"
              tech="ReactJs, Tailwind"
              github="https://github.com/fsholehan/tokoad"
              link="https://tokopedia-clone-tailwind.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/564x/3f/f1/08/3ff1081673407f15e6789253b0f85401.jpg"
              title="Cookpen"
              meta="Web resep terinspirasi cookpad"
              description="Aktifkan dulu demo di https://cors-anywhere.herokuapp.com/corsdemo"
              tech="ReactJs, Tailwind, Redux"
              github="https://github.com/fsholehan/cookpen"
              link="https://condescending-hopper-faed09.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/564x/f7/97/43/f797435510ca80dc9683d1f870faeb74.jpg"
              title="Pulsa App"
              meta="Web ppob terinspirasi sepulsa"
              description="Aktifkan dulu demo di https://cors-anywhere.herokuapp.com/corsdemo"
              tech="ReactJs, Tailwind, Redux"
              github="https://github.com/fsholehan/pulsa-app"
              link="https://priceless-heyrovsky-72c4bf.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/564x/7d/f8/28/7df8288d688efa84d026de1086e55512.jpg"
              title="Lyrics Finder"
              meta="Web lirik musixmatch"
              description="Aktifkan dulu demo di https://cors-anywhere.herokuapp.com/corsdemo"
              tech="ReactJs, Bootstrap"
              github="https://github.com/fsholehan/lyrics-finder"
              link="https://sharp-meitner-531b06.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/564x/46/1e/6a/461e6a035b011eac45e15796314f05a9.jpg"
              title="Landing page online course"
              meta="Web untuk kelas online"
              description="Web kelas online sederhana namun apik"
              tech="Html, CSS, Bootstrap"
              github="https://github.com/fsholehan/fsholehan.github.io/tree/master/kelasonline"
              link="https://fsholehan.github.io/kelasonline/"
            />
            <Card
              img="https://i.pinimg.com/564x/9a/2c/ac/9a2cacbd62871ee419453448ea3c13b4.jpg"
              title="Kitabisa Clone"
              meta="Terinspirasi dari kitabisa.com"
              description="Web untuk membantu sesama"
              tech="ReactJs, Tailwind"
              github="https://github.com/fsholehan/kitabisa-clone"
              link="https://keen-villani-73495f.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/originals/0e/63/fd/0e63fd27bc70c4d6415d86b1878eb55d.jpg"
              title="Olx Clone"
              meta="Terinspirasi dari olx"
              description="Web untuk jual barang, belum responsive"
              tech="ReactJs, CSS Native"
              github="https://github.com/fsholehan/olx-homepage-clone"
              link="https://relaxed-lichterman-6679cb.netlify.app/"
            />
            <Card
              img="https://i.pinimg.com/originals/85/66/2e/85662ea1a8db01a4335b3e11ea36d5b2.jpg"
              title="SiapDagang Jasa Web"
              meta="SiapDagang untuk jasa web"
              description="Web untuk jasa web yang apik"
              tech="Html, CSS, Bootstrap"
              github="https://github.com/fsholehan/fsholehan.github.io/tree/master/siapdagang"
              link="https://fsholehan.github.io/siapdagang/"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
