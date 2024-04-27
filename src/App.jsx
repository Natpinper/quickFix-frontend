import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import MyProfile from "./pages/MyProfile";
import SignUpPage from "./pages/SignUpPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import UserDetailsPage from "./pages/UserDetailsPage";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/user/:userId" element={<UserDetailsPage/>} />
        <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LogIn/></IsAnon>} />
        <Route path="/profile" element={<IsPrivate><MyProfile/></IsPrivate>}/>
        <Route path="/post/create" element={<IsPrivate><CreatePost/></IsPrivate>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
