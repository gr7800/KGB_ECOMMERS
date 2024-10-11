import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Provider } from "react-redux"
import "./App.css";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return <Provider store={store} >
    <div className="pt-[72px]">
      <ToastContainer />
      <AllRoutes />
    </div>
  </Provider>;
}

export default App;
