interface Props extends React.ComponentProps<"div"> {}

const categories = ["All", "Dog", "Cat", "Bird"];

export const CategoryList = ({ ...props }: Props) => {
  return (
    <div {...props} className="space-x-8">
      {categories.map((items) => (
        <button
          key={items}
          className="border border-red-600 px-8 py-2 rounded-full text-red-600"
        >
          {items}
        </button>
      ))}
    </div>
  );
};
