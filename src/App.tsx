import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Channel, Home, SearchTerm, Shorts } from "./pages";
import { BlackScreen, Error, Sidebar } from "./components";
import { useGlobalState } from "./hooks/StateProvider";

function App() {
  const { toogleSidebar } = useGlobalState();
  return (
    <div>
      <Navbar />
      {toogleSidebar && (
        <>
          <BlackScreen />
          <Sidebar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route errorElement={<Error />} path="shorts" element={<Shorts />} />
          <Route errorElement={<Error />} path="search/:search" element={<SearchTerm />} />
          <Route errorElement={<Error />} path="channel/:id" element={<Channel />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
