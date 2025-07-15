import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./Pages/Hero/Hero";
import Featured from "./Pages/Featured/Featured";
import Movies from "./Pages/Movies/Movies";
import Creators from "./Pages/Creators/Creators";
import JoinCommunity from "./Pages/JoinCommunity/JoinCommuniyt";
import Footer from "./Pages/Footer/Footer";
import "./style.css"
export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Creators/>
              <JoinCommunity/>
            </>
          }
        />

        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
