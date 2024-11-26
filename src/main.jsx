import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
    return(
    // ReactFragmentを使うパターン 
    <>
    {/*  <div id="App"> */}
        <h1>こんにちは!</h1>
        <p>おげんきですか?</p>
    {/*  </div> */}
    </>
    ); 
};

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);