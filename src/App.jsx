import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import MyProfile from "./pages/MyProfile";
import SignUpPage from "./pages/SignUpPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:postId" element= {<PostPage/>} />
        <Route path="/user/:userId" element={<IsPrivate><MyProfile/></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LogIn /></IsAnon>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
