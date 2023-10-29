import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Channel, Detail, Home, SearchTerm, Shorts } from "./pages";
import { Error, SearchMobile, Sidebar } from "./components";
import { useGlobalState } from "./hooks/StateProvider";
import { Toaster } from "sonner";

function App() {
  const { dark } = useGlobalState();
  return (
    <div className={dark ? "dark" : "light"}>
      <div className="dark:bg-zinc-900 min-h-screen bg-white dark:text-white">
        <Navbar />
        <Sidebar />
        <SearchMobile />
        <Toaster position="top-center" richColors theme={dark ? "dark" : "light"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route errorElement={<Error />} path="/shorts" element={<Shorts />} />
          <Route errorElement={<Error />} path="/search/:search" element={<SearchTerm />} />
          <Route errorElement={<Error />} path="/video-detail/:id" element={<Detail />} />
          <Route errorElement={<Error />} path="/channel/:id" element={<Channel />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
