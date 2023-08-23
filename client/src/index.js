import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
        </React.StrictMode>
    </BrowserRouter>
    );
