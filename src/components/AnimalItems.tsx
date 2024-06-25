import birdAnimal from "@/assets/Sparrow.svg";
import { Animal } from "@/types";
import Image from "next/image";

interface Props extends React.ComponentProps<"div"> {
  animal: Animal;
}

export const AnimalItems = ({ animal, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="bg-[#040405] p-4 border border-white/10 rounded-md  aspect-square flex items-center justify-center ">
        <Image src={animal.image} alt="bird" width={500} height={500} />
      </div>
      <p className="text-center">{animal.name}</p>
    </div>
  );
};
