import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
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
        <Route path="/editBook" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
