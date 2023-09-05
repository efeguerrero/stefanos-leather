//Component Import
import Card from "./Card";

const CategoriesGrid = () => {
  return (
    <section id="categories" className="my-12 min-h-[100svh] bg-white lg:my-24">
      <section className="container">
        <h2 className="text-4xl font-bold uppercase">Our Products</h2>
        <div className="mt-16 flex h-full flex-wrap items-center justify-center gap-6 overflow-hidden lg:gap-0 lg:rounded-xl lg:px-24">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  );
};

export default CategoriesGrid;
