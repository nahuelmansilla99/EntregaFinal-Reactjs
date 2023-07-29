import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./config/firebase";


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);




root.render(<App/>)