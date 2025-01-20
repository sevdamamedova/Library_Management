import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <Provider store={store}>
      
    </Provider> */}
  </BrowserRouter>
);
