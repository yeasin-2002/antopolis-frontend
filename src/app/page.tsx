import {
  AddAnimal,
  AddCategory,
  AnimalItems,
  CategoryList,
} from "@/components";
import { getAllAnimal, getAllCategory } from "@/helpers";

const RootPage = async () => {
  const allCategory = await getAllCategory();
  const allAnimal = await getAllAnimal();

  return (
    <section className="bg-black min-h-screen  text-white p-20">
      <div className="flex items-center justify-between">
        <CategoryList categories={allCategory.data} />
        <div className="flex items-center justify-center gap-x-2">
          <AddAnimal allCategory={allCategory.data} />
          <AddCategory />
        </div>
      </div>
      <main className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-6    mt-10">
        {allAnimal?.data?.map((items) => (
          <AnimalItems key={items._id} animal={items} />
        ))}
      </main>
    </section>
  );
};

export default RootPage;
