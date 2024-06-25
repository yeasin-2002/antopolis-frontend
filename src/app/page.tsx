import { AnimalContents } from "@/components";
import { getAllAnimal, getAllCategory } from "@/helpers";


const RootPage = async () => {
  const allCategory = await getAllCategory();
  const allAnimal = await getAllAnimal();

  return (
    <section className="bg-black min-h-screen  text-white p-2 mini:p-5 md:p-7 xl:p-20">
      <AnimalContents allAnimal={allAnimal} allCategory={allCategory} />
    </section>
  );
};

export default RootPage;
