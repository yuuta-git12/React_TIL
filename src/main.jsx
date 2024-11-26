import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    // 開発モードでStrictModeで動かす場合はレンダリングが2回行われる
    // <StrictMode>
        <App />
    // </StrictMode>
);