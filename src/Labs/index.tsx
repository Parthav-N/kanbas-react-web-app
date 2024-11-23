import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs () {
    return (
        <Provider store={store}>
            <div id="wd-labs">
                <h1>Parthav Nuthalapati</h1>
                <p>Section - 3</p>
                <p>CRN: 20596</p>
                <p>Github: <a href="https://github.com/Parthav-N/kanbas-react-web-app">Link</a></p>
                <p>Server: <a href="https://kanbas-node-server-app-u0y0.onrender.com/">Link</a></p>
                <p>Node Server Github: <a href="https://github.com/Parthav-N/kanbas-node-server-app">Link</a></p>
                <h1>Labs</h1>
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="/Labs" />} />
                    <Route path="Lab1" element={<Lab1 />} />
                    <Route path="Lab2" element={<Lab2 />} />
                    <Route path="Lab3" element={<Lab3 />} />
                    <Route path="Lab4" element={<Lab4 />} />
                    <Route path="Lab5" element={<Lab5 />} />
                </Routes>
            </div>
        </Provider>
    );
}