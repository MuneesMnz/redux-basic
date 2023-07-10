import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store} >
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
