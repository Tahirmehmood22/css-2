import "./App.css";
import ChildComponent from "./childComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import EffectsComponent from "./Components/Effect/EffectsComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
        <ChildComponent person={person} />
        <MyStateComponent />
        <EffectsComponent> </EffectsComponent>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
    </div>
  );
}

export default App;
