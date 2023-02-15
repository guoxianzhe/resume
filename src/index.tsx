import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./render/App";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <App />
  </Router>
);
