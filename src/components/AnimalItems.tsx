interface Props extends React.ComponentProps<"div"> {}
import birdAnimal from "@/assets/Sparrow.svg";
import Image from "next/image";

export const AnimalItems = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="bg-[#040405] p-6 border border-white/10 rounded-md  ">
        <Image src={birdAnimal} alt="bird" />
      </div>
      <p className="text-center">name</p>
    </div>
  );
};
