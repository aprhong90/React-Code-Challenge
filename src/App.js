import "./App.css";
import ConditionalInput from "./components/ConditionalInput";

function App() {
  return (
    <div className="App">
      <ConditionalInput input={false} />
      <ConditionalInput input={["apple", "banana", "grape"]} />
      <ConditionalInput input={"Hello"} />
    </div>
  );
}

export default App;
