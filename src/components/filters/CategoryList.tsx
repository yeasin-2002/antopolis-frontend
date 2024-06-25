import { Category } from "@/types";

interface Props extends React.ComponentProps<"div"> {
  categories: Category[];
}

export const CategoryList = ({ categories = [], ...props }: Props) => {
  return (
    <div {...props} className="space-x-8">
      {categories.map((items) => (
        <button
          key={items.name}
          className="border border-red-600 px-8 py-2 rounded-full text-red-600"
        >
          {items.name}
        </button>
      ))}
    </div>
  );
};
