
// import { Nav } from "./components";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";

const App = () => {
  return (
    <main className='relative'>

      <section className='xl:padding-l wide:padding-r padding-b'>

        <Hero />

      </section>

      <section>

        <PopularProducts />
      </section>




    </main>
  );
};

export default App;
