import { Button } from "../ui";

interface Props extends React.ComponentProps<"button"> {}

export const AddCategory = ({ ...props }: Props) => {
  return <Button {...props}>Add Category</Button>;
};
