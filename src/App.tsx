import React from "react";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";

interface AppProps {
  tab?: string;
}

function App({ tab }: AppProps) {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <HashRouter>
          <Routes />
        </HashRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
