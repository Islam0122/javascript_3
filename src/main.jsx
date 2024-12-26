import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.jsx";
import Layout from "./components/layout/Layout.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*<App />*/}
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                {routes.map((route) => <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}/>)}
            </Route>
        </Routes>

    </BrowserRouter>
)
