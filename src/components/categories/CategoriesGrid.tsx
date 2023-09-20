//Component Import
import Card from "./Card";

//Type Definition
interface CategoriesGridProps {
  categories: any;
}

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className="mx-auto max-w-7xl py-24 lg:py-32 lg:pt-64">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>

          <div className="mt-10 grid gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3  ">
            {categories.map((category: any) => (
              <Card category={category} key={category.sys.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
