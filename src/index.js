import React from "react";
import { render } from "react-dom";
import "airbnb-browser-shims";
import "../static/semantic.min.css";

const App = () => <h1>Hello React.</h1>;

render(<App />, document.getElementById("app"));
