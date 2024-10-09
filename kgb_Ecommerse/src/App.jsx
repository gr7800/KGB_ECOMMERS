import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Provider } from "react-redux"
import "./App.css";
import store from "./redux/store";

function App() {
  return <Provider store={store} >
    <div className="pt-[72px]">
      <AllRoutes />
    </div>
  </Provider>;
}

export default App;
