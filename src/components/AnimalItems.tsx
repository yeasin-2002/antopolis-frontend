import birdAnimal from "@/assets/Sparrow.svg";
import { Animal } from "@/types";
import Image from "next/image";

interface Props extends React.ComponentProps<"div"> {
  animal: Animal;
}

export const AnimalItems = ({ animal, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="bg-[#040405] p-6 border border-white/10 rounded-md  ">
        <Image
          src={animal.image}
          alt="bird"
          width={300}
          height={300}
          className="aspect-square"
        />
      </div>
      <p className="text-center">{animal.name}</p>
    </div>
  );
};
