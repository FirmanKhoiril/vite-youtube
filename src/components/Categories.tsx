import { useGlobalState } from "../hooks/StateProvider";
import { categoriesData } from "../types/DummyData";
import { TCategory } from "../types/Types";

const Categories = () => {
  const { setCategories, categories } = useGlobalState();
  return (
    <div className="flex items-center scrollbar-none gap-2 p-4 overflow-x-auto w-full">
      {categoriesData.map((category: TCategory) => (
        <button
          onClick={() => setCategories(category.name)}
          name={category.name}
          aria-label={category.name + "Button"}
          type="button"
          className={` ${
            category.name === categories ? "bg-primary text-white hover:opacity-80" : "bg-black/10 hover:bg-black/20 dark:bg-white/10 hover:dark:bg-white/20"
          }  min-w-[134px] transition_all  rounded-full p-[7px] sm:p-2 font-poppins`}
          key={category.name}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
