import { SetStateAction } from "react";

export type TContextState = {
  searchToogle: boolean;

  categories: string;
  cursorNext: string;
  toogleDescription: boolean;
  toogleSidebar: boolean;
  searchTermMobile: string;
  searchTerm: string;
  setCursorNext: React.Dispatch<SetStateAction<string>>;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setCategories: React.Dispatch<SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchTermMobile: React.Dispatch<React.SetStateAction<string>>;
  setToogleDescription: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TCategory = {
  name: string;
};
