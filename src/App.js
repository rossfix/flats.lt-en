import { React, useContext } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contacts";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import AllArticlesPage from "./pages/articles";
import ArticlePageOne from "./pages/articleone";
import {
  articleOne,
  articleTwo,
  articleThree,
  
} from "./components/ArticleOne/Data";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contacts-form" element={<ContactPage />} exact />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/articles" element={<AllArticlesPage />} exact />
        <Route path="/*" element={<ErrorPage />} exact />
        <Route
          path="/articles/long-term-property-management-in-lithuania"
          element={<ArticlePageOne {...articleOne} />}
          exact
        />
        <Route
          path="/articles/properties-lease-agreement-in-lithuania"
          element={<ArticlePageOne {...articleTwo} />}
          exact
        />
        <Route
          path="/articles/investment-properties-in-lithuania"
          element={<ArticlePageOne {...articleThree} />}
          exact
        />

        
        
       
      </Routes>
    </Router>
  );
}

export default App;
