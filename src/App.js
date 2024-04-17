import "./App.css";
import "./index.css";
import Inputs from "./Component/Inputs";
import TopButton from "./Component/TopButton";
import TimeAndLocation from "./Component/TimeAndLocation";
import TemparatureAndDetails from "./Component/TemparatureAndDetails";
import Forecast from "./Component/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />
      <TimeAndLocation />
      <TemparatureAndDetails />
      <Forecast title="value" />
      <Forecast title="value" />
    </div>
  );
}

export default App;
