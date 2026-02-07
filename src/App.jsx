import { useState } from "react";
import Home from "./pages/Home";
import RoseDay from "./pages/RoseDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "rose":
        return <RoseDay goBack={() => setPage("home")} />;
      case "chocolate":
        return <ChocolateDay goBack={() => setPage("home")} />;
      case "teddy":
        return <TeddyDay goBack={() => setPage("home")} />;
      default:
        return <Home navigate={setPage} />;
    }
  };

  return (
    <div className="app-fullscreen">
      {renderPage()}
    </div>
  );
}
