import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "kelly";

  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
