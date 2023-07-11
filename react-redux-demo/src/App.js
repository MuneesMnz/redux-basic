import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserComponent from "./component/UserComponent";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <UserComponent />
        {/* <CakeContainer />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr/>
        <NewCakeContainer />
        <hr/>
        <ItemContainer cak />
        <ItemContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
