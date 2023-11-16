import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useItemsContext } from "../context/ItemsContext";
import Item from "../interfaces/Item";


function CartItem({ items } : { items: Item[] }) {

    const [deleteItem, setDeleteItem] = useState(false);
     const { setCart } = useItemsContext();
     const totalValue = items.reduce((acc, item) => acc + item.price, 9.5);

     const handleDelete = (id: string) => {
        const newCart = items.filter((item) => item.id !== id);
        setCart(newCart);
    };

  return (
    <div className="order">
        <h2>Items</h2>
        <h5>Order #0101</h5>
        <ul className="order-list">
          {items.map((item) => {
            return (
              <li
                key={item.id}
                onMouseEnter={() => setDeleteItem(true)}
                onMouseLeave={() => setDeleteItem(false)}
              >
                <img
                  src={item.thumbnail}
                  className={`${deleteItem && "opacity-50"}`}
                />
                <h4>{item.title.substring(0, 15)}</h4>
                <h5>{item.price}</h5>
                {deleteItem && (
                  <button
                    className="delete relative left-20 top-[-40px]"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdClose size="20px" color="black" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <h5>Taxa</h5>
        <h4>$ 9.50</h4>
        <h5 className="total">Total</h5>
        {
          <h4 className="total-price">
            $ {items.length ? totalValue.toFixed(2) : "0"}
          </h4>
        }
      </div>
  );
}

export default CartItem;
