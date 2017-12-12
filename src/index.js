import React from "react";
import { render } from "react-dom";
import "airbnb-browser-shims";

const App = () => <h1>Hello React.</h1>;

render(<App />, document.getElementById("app"));
