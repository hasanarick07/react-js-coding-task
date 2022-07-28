import { useState } from "react";
import "./App.css";
import NewReceipt from "./Components/NewReceipt";
import ReceiptTable from "./Components/ReceiptTable";

function App() {
  const [newReceipt, setNewReceipt] = useState([]);
  console.log(newReceipt);

  return (
    <div className="App">
      <NewReceipt setNewReceipt={setNewReceipt}></NewReceipt>
      <ReceiptTable newReceipt={newReceipt}></ReceiptTable>
    </div>
  );
}

export default App;
