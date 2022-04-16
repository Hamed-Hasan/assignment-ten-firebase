import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import CheckOut from "./components/CheckOut/CheckOut";
import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            {/* <Generator /> */}
                            <CheckOut/>
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
