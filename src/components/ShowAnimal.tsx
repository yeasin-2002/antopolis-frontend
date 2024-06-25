import { AnimalItems } from "@/components";
import { Animal } from "@/types";

interface Props extends React.ComponentProps<"div"> {
  data: Animal[];
}

export const ShowAnimal = ({ data, ...props }: Props) => {
  return (
    <>
      {data?.length !== 0 ? (
        <main
          className="mt-10 gap-10   grid grid-cols-2 mini:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  "
          {...props}
        >
          {data?.map((items) => (
            <AnimalItems
              key={items._id}
              animal={items}
              className="animate-fade-in"
            />
          ))}
        </main>
      ) : (
        <p className="text-center text-4xl  mt-20">No Animal Found</p>
      )}
    </>
  );
};
