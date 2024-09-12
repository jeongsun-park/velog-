import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [mainText, setMainText] = useState("trending");

  return (
    <div className="body">
      <Header setMainText={setMainText} mainText={mainText} />
      <Main mainText={mainText} />
    </div>
  );
}

export default App;
