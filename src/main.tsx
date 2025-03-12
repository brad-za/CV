import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

import "./index.css";

const container = document.getElementById("root");
// Add non-null assertion since we know the element exists
const root = createRoot(container!);
root.render(<App tab="home" />);
