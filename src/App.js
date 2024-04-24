import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginSignPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {}
                <Route path="/" element={<MainPage />}></Route>
                {}
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
