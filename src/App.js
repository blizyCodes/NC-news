import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";

//components
import { Header } from "./components/Header";
import { ArticleList } from "./components/ArticleList";
import { Navigator } from "./components/Navigator.jsx";
import { Home } from "./components/Home";

function App() {
  const [loggedInUser] = useState("jessjelly");

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articlesfortopic/:topic" element={<ArticleList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
