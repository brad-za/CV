import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes.tsx";

interface AppProps {
  tab?: string;
}

function App({ tab }: AppProps) {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes />
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
