import { useState } from 'react';
// import Greeter from './components/Greeter';
import './App.css';
import Item from "./models/item"
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as getId } from "uuid";

//? No need to compile ourselves! No tsc command needed.
// const num: number = 123;
// console.log("Hello from TS!", num)

function App() {
  const [items, setItems] = useState<Item[]>([]); 
  const addItem = (product: string, quantity: number) => {
    console.log("Made it to the app component!");
    // console.log(product);
    setItems([...items, { id: getId(), product, quantity }])
  }
//   const items = [
//     { id: 1, productName: "Lemon", quantity: 3 },
//     { id: 2, productName: "Chicken Breast", quantity: 2 }
// ];

  return (
    <div>
      {/* <Greeter person="Matt"/>
      <Greeter person="Gracie"/>
      <Greeter person="Kelsey"/> */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
