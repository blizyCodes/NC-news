import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";

//components
import { Header } from "./components/Header";
import { ArticleList } from "./components/ArticleList";
import { Navigator } from "./components/Navigator.jsx";
import { Home } from "./components/Home";
import { SingleArticle } from "./components/SingleArticle";
import { ErrorPage } from "./components/ErrorPage";
import { Login } from "./components/Login";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Header loggedInUser={loggedInUser} />
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/topics/:topic" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/users"
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
