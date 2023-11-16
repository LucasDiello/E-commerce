import { useMemo, useState } from "react";
import { ReactNode } from "react";
import ItemsContext from "./ItemsContext";
import Item from "../interfaces/Item";

export default function ItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const values = useMemo(() => ({
    items,
    setItems,
    cart,
    setCart,
}), [items, cart]);

  return (
    <ItemsContext.Provider value={values}>
      {children}
    </ItemsContext.Provider>
  );
}
