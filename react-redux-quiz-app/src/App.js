import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import QuizView from "./features/quiz/QuizView";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<QuizView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
