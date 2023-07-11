import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <CakeContainer />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr/>
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
