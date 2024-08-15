import { useState } from "react";
import "./App.css";
import { Person } from "./components/outstanding-person/person/Person";
import { Club } from "./components/football/club/Club";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Person />
      <Club />
    </>
  );
}

export default App;
