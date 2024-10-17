import { useState } from "react";
import Logo from "./Logo";
import { PackList } from "./PackList";
import { Stat } from "./Stat";
import { Form } from "./Form.1";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    //filter - loop over array of elements that meet criteria
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleUpdate(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    if (window.confirm("Are you sure you want to delete all items?"))
      setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItemms={handleAddItems} />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleUpdate}
        onClearList={handleClear}
      />
      <Stat items={items} />
    </div>
  );
}
