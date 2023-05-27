import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./context/books.js";

//different way to write the index
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <Provider value={5}>
      <App />
    </Provider>
  </div>
);
