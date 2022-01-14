
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

//local imports
import HorizontalLayout from "layouts/HorizontalLayout";
import FirstPage from "pages/FirstPage";
import SecondPage from "pages/SecondPage";
import store from "redux/store";
import PrivateRoute from "routes/PrivateRoute";
//css
import './assets/styles/global.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HorizontalLayout />}>
        <Route index element={<FirstPage />} />
        <Route
          path="second"
          element={
            <PrivateRoute>
              <SecondPage />
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
