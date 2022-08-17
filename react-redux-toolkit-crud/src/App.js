import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./components/AddBook";
import Home from "./components/Home";
import Header from "./components/Shared/Header";
import ShowBooks from "./components/ShowBooks";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showBooks" element={<ShowBooks />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
