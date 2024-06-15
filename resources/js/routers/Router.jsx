import { Routes, Route } from "react-router-dom";
import Main from "../Main";
import Favourite from "../pages/Favourite";
import Complete from "../pages/Complete";
import Home from "../pages/Home";
import Progress from "../pages/Progress";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/complete" element={<Complete />} />
                <Route path="/progress" element={<Progress />} />
            </Route>
        </Routes>
    );
}
