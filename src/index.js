import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//different way to write the index
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
