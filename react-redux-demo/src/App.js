import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <CakeContainer />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
