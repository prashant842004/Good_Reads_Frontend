// import About from "Pages/About";
import Signup from "Pages/Auth/Signup";
import Signin from "Pages/Auth/Signin";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {

    return(
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}