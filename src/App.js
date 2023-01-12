import { React, useContext } from "react";
import "./App.css";
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
import ProfilePage from "./pages/console/profileapp";
import FlatsPage from "./pages/console/flatsapp";
import AgreementsPage from "./pages/console/agreementsapp";
import LockPage from "./pages/console/lockapp";
import ComunicationPage from "./pages/console/contactapp";
import PaymentsPage from "./pages/console/paymentsapp";
import { AuthContext } from "./context/AuthContext";
import {
  articleOne,
  articleTwo,
  articleThree,
  articleFour,
  articleFive,
  articleSix,
  articleSeven,
  articleEight,
  articleNine,
  articleTen,
  articleEleven,
  articleTwelve
} from "./components/ArticleOne/Data";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/prisijungti" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/kontaktu-forma" element={<ContactPage />} exact />
        <Route path="/prisijungti" element={<LoginPage />} exact />
        <Route path="/straipsniai" element={<AllArticlesPage />} exact />
        <Route
          path="/straipsniai/nt-nuomos-patarimai"
          element={<ArticlePageOne {...articleOne} />}
          exact
        />
        <Route
          path="/straipsniai/buto-nuomos-mokesciai-lietuvoje"
          element={<ArticlePageOne {...articleTwo} />}
          exact
        />
        <Route
          path="/straipsniai/buto-nuomos-sutartis"
          element={<ArticlePageOne {...articleThree} />}
          exact
        />
        <Route
          path="/straipsniai/ilgalaike-butu-nuoma"
          element={<ArticlePageOne {...articleFour} />}
          exact
        />
        <Route
          path="/straipsniai/legali-buto-nuoma"
          element={<ArticlePageOne {...articleFive} />}
          exact
        />
        <Route
          path="/straipsniai/nekilnojamo-turto-nuoma"
          element={<ArticlePageOne {...articleSix} />}
          exact
        />
        <Route
          path="/straipsniai/nekilnojamo-turto-administravimas"
          element={<ArticlePageOne {...articleSeven} />}
          exact
        />
        <Route
          path="/straipsniai/kaip-greitai-isnuomoti-busta"
          element={<ArticlePageOne {...articleEight} />}
          exact
        />
        <Route
          path="/straipsniai/kaip-paruosti-buta-nuomai"
          element={<ArticlePageOne {...articleNine} />}
          exact
        />

        <Route
          path="/straipsniai/ilgalaikes-nuomos-administravimas"
          element={<ArticlePageOne {...articleTen} />}
          exact
        />
        <Route
          path="/straipsniai/pasyvios-pajamos-is-nekilnojamo-turto"
          element={<ArticlePageOne {...articleEleven} />}
          exact
        />
        <Route
          path="/straipsniai/nt-brokerio-paslaugu-altervatyva"
          element={<ArticlePageOne {...articleTwelve} />}
          exact
        />
        <Route path="/*" element={<ErrorPage />} exact />
        <Route
          path="/savitarna/"
          element={<Navigate to="/savitarna/profilis" replace />}
        />
        <Route
          path="/savitarna/profilis"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/savitarna/objektai"
          element={
            <RequireAuth>
              <FlatsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/savitarna/sutartys"
          element={
            <RequireAuth>
              <AgreementsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/savitarna/mokejimai"
          element={
            <RequireAuth>
              <PaymentsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/savitarna/raktai"
          element={
            <RequireAuth>
              <LockPage />
            </RequireAuth>
          }
        />
        <Route
          path="/savitarna/kontaktai"
          element={
            <RequireAuth>
              <ComunicationPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
