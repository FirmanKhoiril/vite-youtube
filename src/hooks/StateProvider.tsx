import { TContextState } from "../types/Types";
import { useState, createContext, useContext } from "react";

export const StateContext = createContext<TContextState>({
  searchToogle: false,
  setSearchToogle: () => {},

  searchTerm: "",
  cursorNext: "",
  toogleSidebar: false,
  setToogleSidebar: () => {},
  setCursorNext: () => {},

  toogleDescription: false,
  setToogleDescription: () => {},
  setSearchTerm: () => {},
  setSearchTermMobile: () => {},
  setCategories: () => {},
  categories: "",
  searchTermMobile: "",
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchToogle, setSearchToogle] = useState<boolean>(true);
  const [searchTermMobile, setSearchTermMobile] = useState("");
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [cursorNext, setCursorNext] = useState("");
  const [categories, setCategories] = useState("berita terbaru 2023");
  const [searchTerm, setSearchTerm] = useState("");
  const [toogleDescription, setToogleDescription] = useState(false);
  return (
    <StateContext.Provider
      value={{
        searchToogle,
        cursorNext,
        categories,
        toogleSidebar,
        searchTerm,
        searchTermMobile,
        toogleDescription,
        setSearchTerm,
        setCategories,
        setToogleSidebar,
        setCursorNext,
        setSearchTermMobile,
        setToogleDescription,
        setSearchToogle,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState: any = (): TContextState => useContext(StateContext);
