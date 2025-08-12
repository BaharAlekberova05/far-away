import { useState } from "react";
import { Stats } from "./components/Stats";
import { PackingList } from "./components/PackingList";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = confirm("Are you sure want to delete all items?");
    confirmed && setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

// const PackingList = ({ items, onDeleteItems, onToggleItem, onClearList }) => {
//   const [sortBy, setSortBy] = useState("input");
//   let sortedItems;

//   if (sortBy === "input") sortedItems = items;

//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (sortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul className="list">
//         {sortedItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             onDeleteItems={onDeleteItems}
//             onToggleItem={onToggleItem}
//           />
//         ))}
//       </ul>

//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear list</button>
//       </div>
//     </div>
//   );
// };

// const Item = ({ item, onDeleteItems, onToggleItem }) => {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItem(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItems(item.id)}>❌</button>
//     </li>
//   );
// };

export default App;
