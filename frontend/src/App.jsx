import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Prediction from "./pages/Prediction/Prediction";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route
                path="/prediction"
                element={<Prediction />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
}

export default App;