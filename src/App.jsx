import Navbar from "./components/Navbar";
import UserContent from "./components/UserContent";
import Footer from "./components/footer/Footer";
import SignIn from "./components/SignIn";
import Content from "./components/Content/Content"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserContent />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/assets" element={<Content />} />
        <Route path='/jobs' element={<JobPage/>} />
      </Routes>
      {/* <Footer /> */}
      {/* <Content /> */}
    </Router>
  );
}

export default App;
