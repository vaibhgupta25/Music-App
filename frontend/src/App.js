import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/login";
import { useCookies } from "react-cookie";
import SignUpComponent from "./routes/signup";
import HomeComponent from "./routes/Home";

function App() {
  const [cookie, setCookie] = useCookies();
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        {cookie.token ? (
          <Routes>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/signup" element={<SignUpComponent />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
