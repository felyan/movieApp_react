import "./App.css";
import Auditorium from "./components/Auditorium";
import Screen from "./components/Screen";
import SelectMovie from "./components/SelectMovie";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <SelectMovie />
      <Showcase />
      <Screen />
      <Auditorium />
    </div>
  );
}

export default App;
