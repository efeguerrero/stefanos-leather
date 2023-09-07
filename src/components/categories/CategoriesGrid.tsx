//Component Import
import Card from "./Card";

//Type Definition
interface CategoriesGridProps {
  categories: any;
}

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <section id="categories" className="my-12 min-h-[100svh] bg-white lg:my-24">
      <section className="container">
        <h2 className="text-4xl font-bold uppercase">Our Products</h2>
        <div className="mt-16 flex h-full flex-wrap items-center justify-center gap-6 overflow-hidden lg:gap-0 lg:rounded-xl lg:px-24">
          {categories.map((category: any) => (
            <Card category={category} key={category.sys.id} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CategoriesGrid;
