import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Channel, Home, SearchTerm, Shorts } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="shorts" element={<Shorts />} />
          <Route path="search/:search" element={<SearchTerm />} />
          <Route path="channel/:id" element={<Channel />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
