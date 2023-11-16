import { createContext, useContext, Dispatch, SetStateAction } from "react";
import Item from "../interfaces/Item";

type ItemsContextType = {
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;
  cart: Item[];
  setCart: Dispatch<SetStateAction<Item[]>>;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItemsContext must be used within an ItemsProvider");
  }
  return context;
};

export default ItemsContext;
