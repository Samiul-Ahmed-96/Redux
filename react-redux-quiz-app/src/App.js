import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import QuizView from "./features/quiz/QuizView";
import AddQuiz from "./pages/AddQuiz/AddQuiz";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<QuizView />} />
          <Route path="/addQuiz" element={<AddQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
