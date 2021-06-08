import { Provider } from "react-redux";
import CounterPage from "./pages/CounterPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
}

export default App;
