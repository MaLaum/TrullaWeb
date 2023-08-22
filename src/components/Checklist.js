import React, { useState, useEffect, useMemo } from "react";
import "../styles/home.css";

const Checklist = () => {
  const initialItems = useMemo(
    () => [
      { id: 1, text: "Zombies info", checked: false },
      { id: 2, text: "Zombies progress", checked: false },
      { id: 3, text: "Zombies EE tutorials", checked: false },
      { id: 4, text: "Zombies Map list", checked: false },
      { id: 5, text: "Zombies Story lore", checked: false },
      { id: 6, text: "Zombies styling", checked: false },
      { id: 7, text: "PC specs", checked: false },
      { id: 8, text: "PC specs styling", checked: false },
      { id: 9, text: "Homepage", checked: false },
      { id: 10, text: "Homepage styling", checked: false },
      { id: 11, text: "Trulla info", checked: false },
      { id: 12, text: "Trulla styling", checked: false },
      { id: 13, text: "rega/login süsteem", checked: false },
      { id: 14, text: "rega/login styling", checked: false },
      { id: 15, text: "servers tab", checked: false },
      { id: 16, text: "server styling", checked: false },
      { id: 17, text: "Party games Steam API", checked: false },
      { id: 18, text: "Party games styling", checked: false },
      { id: 19, text: "Liira info", checked: false },
      { id: 20, text: "Liira styling", checked: false },
    ],
    []
  );

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("todoItems")) || initialItems;
    setItems(savedItems);
  }, [initialItems]);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const toggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="ajutine">
      <h1>To-do List: (iseendale memo)</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
