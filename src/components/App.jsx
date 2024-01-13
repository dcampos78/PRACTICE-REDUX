import { Provider } from "react-redux";
import Counter from "./Counter";
import storeCounter from "./store/store";
function App() {
  return (
    <>
      <Provider store={storeCounter}>
        <div>
          <Counter />
        </div>
      </Provider>
    </>
  );
}
export default App;
