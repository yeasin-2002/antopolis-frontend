import {
  AddAnimal,
  AddCategory,
  AnimalItems,
  CategoryList,
} from "@/components";

const RootPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="bg-black min-h-screen  text-white p-20">
      <div className="flex items-center justify-between">
        <CategoryList />
        <div className="flex items-center justify-center gap-x-2">
          <AddAnimal />
          <AddCategory />
        </div>
      </div>
      <main className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-6    mt-10">
        {arr.map((items) => (
          <AnimalItems key={items} />
        ))}
      </main>
    </section>
  );
};

export default RootPage;
