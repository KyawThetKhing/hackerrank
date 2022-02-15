
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

//local imports
import HorizontalLayout from "layouts/HorizontalLayout";
import Dashboard from "pages/Dashboard";
import Certifications from "pages/Certifications";
import Compete from "pages/Compete";
import LeaderBoard from "pages/LeaderBoard";
import store from "redux/store";
import PrivateRoute from "routes/PrivateRoute";
//css
import './assets/styles/global.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HorizontalLayout />}>
        <Route index element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        <Route
          path="certifications"
          element={
            <PrivateRoute>
              <Certifications />
            </PrivateRoute>
          }
        />
        <Route
          path="compete"
          element={
            <PrivateRoute>
              <Compete />
            </PrivateRoute>
          }
        />
        <Route
          path="leader-board"
          element={
            <PrivateRoute>
              <LeaderBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

const AppWithStore = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

export default AppWithStore;
