import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [mainText, setMainText] = useState("trending");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="body">
      <Header
        setMainText={setMainText}
        mainText={mainText}
        setToggle={setToggle}
        toggle={toggle}
      />
      <Main mainText={mainText} toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default App;
