import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChildComponent from "./childComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import EffectComponent from "./Components/Effect/EffectsComponent";
import HomePage from "./HomePage/HomePage";


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
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="Props" element={<PropsComponent person={person} />} />
        <Route path="state" element={<MyStateComponent />} />
        <Route path="effect" element={<EffectComponent />} />
      </Routes>

    </div>
  );
}

export default App;
