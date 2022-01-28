import "./App.css";
import Counter from "./components/Counter";
import Store from "./components/Store";
import { Provider } from "react-redux";
import User from "./components/User";
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Counter />
        <User />
      </div>
    </Provider>
  );
}

export default App;
