import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import { Header } from "./components/Header";
import { ArticleList } from "./components/ArticleList";
import { Navigator } from "./components/Navigator.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigator />
        <Routes>
          <Route path="/" element={<h1>Welcome to NC News.</h1>} />
          <Route path="/articles" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
