import React from "react";
import { Button } from "../ui";
interface Props extends React.ComponentProps<"button"> {}

export const AddAnimal = ({ ...props }: Props) => {
  return <Button {...props}>Add Animal</Button>;
};
