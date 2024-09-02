import { useEffect, useState } from "react";
import catIcon from "../src/image/cat.webp";

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    getFactsApi();
  }, []);

  const getFactsApi = () => {
    fetch("https://catfact.ninja/fact")
      .then((data) => data.json())
      .then((factObj) => {
        setCatFact(factObj.fact);
      });
  };

  return (
    <div className="flex flex-col py-10 gap-7 items-center border-solid h-screen">
      <div className="w-80 h-64 rounded-xl overflow-hidden ">
        <img className="w-full h-full object-cover " src={catIcon} alt="" />
      </div>

      <div className="bg-slate-300 w-80 min-h-60 py-2 px-2 rounded-lg">
        <p>{catFact}</p>
      </div>

      <button
        className="bg-slate-300 py-2 rounded-lg w-80 "
        onClick={getFactsApi}
      >
        cat facts
      </button>
    </div>
  );
}

export default App;
