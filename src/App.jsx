import React from "react";
import { Route, useLocation, HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";

function App() {
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
