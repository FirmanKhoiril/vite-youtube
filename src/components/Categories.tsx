import { useGlobalState } from "../hooks/StateProvider";
import { categoriesData } from "../types/DummyData";
import { TCategory } from "../types/Types";

const Categories = () => {
  const { categories, setCategories } = useGlobalState();
  return (
    <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto w-full">
      {categoriesData.map((category: TCategory) => (
        <button
          onClick={() => setCategories(category.name)}
          name={category.name}
          aria-label={category.name + "Button"}
          type="button"
          className={` ${
            category.name === categories ? "bg-primary text-white border-transparent" : "bg-white border-pink-500"
          } min-w-[134px] transition_all border border-pink-500 hover:border-transparent rounded-sm hover:bg-primary p-2 font-poppins`}
          key={category.name}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
